import { useSelector } from "react-redux"
import CartItem from "./CartItem";
import { useAuth0 } from "@auth0/auth0-react";
function Cart() {
  const data = useSelector((state) => state.cart.cartProducts);
  const { user } = useAuth0();
  console.log(data)
  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="font-bold mb-3 text-lg">{`${user.name}'s Cart`}</h2>
      <div className="flex justify-end uppercase w-3/4 p-4 bg-gray-900 text-gray-100">
        <p className="w-1/4 flex justify-center">Item</p>
        <p className="w-1/4 flex justify-center">Quantity</p>
        <p className="w-1/4 flex justify-center">Price</p>
        <p className="w-1/4 flex justify-center">Remove</p>
      </div>
      {data.map((elem) => {
        return <CartItem key={elem.id} {...elem} />
      })}
    </div>
  )
}

export default Cart
