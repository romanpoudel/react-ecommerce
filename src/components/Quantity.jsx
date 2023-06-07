import PropType from "prop-types"

function Quantity({ amount, handleDecrement, handleIncrement }) {
console.log(amount)
    return (
        <div className="flex font-bold w-22  p-2">
            <div className="bg-gray-200 w-6 text-center"><button onClick={handleDecrement}>-</button></div>
            <div className="w-10 text-center">{amount}</div>
            <div className="bg-gray-200 w-6 text-center"><button onClick={handleIncrement}>+</button></div>
        </div>
    )
}
Quantity.propTypes = {
    amount: PropType.number,
    handleDecrement: PropType.func,
    handleIncrement: PropType.func
}

export default Quantity
