import { Link } from "react-router-dom"
import { useCart } from "../Context/CartProvider"
import { CartContextProps } from "../Context/InterfaceCart"
const CartWidget = () => {
    const { cartProducts } = useCart() as CartContextProps
    return (

        <>
            {cartProducts.length > 0 ? (<div className="fixed bottom-11 w-full bg-gray-200 h-10 flex items-center px-10 -start-1 z-40 justify-center gap-x-6">
                <span className="w-28">{cartProducts.length} Productos</span>
                <Link to='/cart'>
                    <button className="w-28 bg-gray-300 font-semibold  rounded-xl shadow-lg">Ir a Carrito</button>
                </Link>
            </div>) : (null)}
        </>

    )
}

export default CartWidget