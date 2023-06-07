import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchSingleProduct } from '../features/product/productSlice'
import { useSelector } from "react-redux"
import Star from './Star'
import { addToCartReducer } from '../features/product/cartSlice'

function Item() {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [dispatch, id])

  const singleItem = useSelector((state) => state.products.singleProduct);
  console.log(singleItem)
  const {id:alias,image,title,rating,price,description,category}=singleItem;

  const handleAddToCart = () => {
    const payload = {
      alias,
      image,
      price
    };

    const action = addToCartReducer(payload); // Create an action object

    dispatch(action); // Dispatch the action
  };
  return (
    <div className='flex mt-20 h-full'>
      <div className='w-1/2 flex justify-center h-96'>
        <img src={image} alt="item" />
      </div>
      <div className='w-1/2  pr-12'>
        <div >
          <p className='font-bold text-4xl text-gray-900'>{title}</p>
          <Star rating={rating}/>
          <p className='font-bold text-red-500 my-6'>Rs. {price}</p>
          <p className='mb-6 text-justify'>{description ? description.charAt(0).toUpperCase() + description.slice(1) : ''}</p>
          <p className='font-serif text-lg font-normal text-gray-900'>Category: {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</p>

        </div>
        <div className='mt-6 '>
          <button onClick={handleAddToCart} className='border bg-red-500 p-2 rounded-full'><p className='uppercase font-bold text-white'>Add to cart</p></button>
        </div>
      </div>
    </div>
  )
}

export default Item
