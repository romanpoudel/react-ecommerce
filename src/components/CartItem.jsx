import PropType from "prop-types"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../features/product/cartSlice"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Quantity from "./Quantity";
import { useState } from "react";

function CartItem({ id, image, price }) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removeFromCart(id))
    }
    const [amount, setAmount ] = useState(1)
    const handleDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const handleIncrement = () => {
        setAmount(amount + 1)
    }

    return (
        <div className="w-3/4">
            <div className="flex justify-between items-center border-solid border-x-2 border-b-2 border-gray-900 p-2 h-14">
                <div className="w-1/4 flex justify-center "><img className="object-contain h-12 w-8" src={image} /></div>
                <div className="w-1/4 flex justify-center"><Quantity amount={amount} handleDecrement={handleDecrement} handleIncrement={handleIncrement} /></div>
                <p className="w-1/4 flex justify-center">{(amount*price).toFixed(2)}</p>
                <button className="w-1/4 flex justify-center" onClick={() => { handleDelete(id) }}><DeleteOutlineIcon color="error" /></button>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    id: PropType.number,
    image: PropType.string,
    price: PropType.number
}
export default CartItem
