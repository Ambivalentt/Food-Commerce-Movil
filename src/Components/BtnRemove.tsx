import { MdDeleteForever } from "react-icons/md";
import {CartContextProps} from "../Context/InterfaceCart"
import { useCart } from "../Context/CartProvider"

const BtnRemove = ( {productTime}  : {productTime:string}) => {

    const {cartProducts , setCartProducts} = useCart() as CartContextProps;

    const handleRemoveBtn = () => {
       const newProducts = cartProducts.filter(item => item.time !== productTime)
       setCartProducts(newProducts)
    }
    return (
        <button onClick={handleRemoveBtn} className="text-2xl absolute top-0 right-0 ">
            <MdDeleteForever />
        </button>
    )
}

export default BtnRemove