import { useContext, createContext, useState, ReactNode, useEffect, Provider, useMemo } from 'react'
import { CartContextProps, CartProviderFinal, CartProviderTemporal } from './InterfaceCart'
import { Storage } from '../CartWidget/Storage'
import CartProducts from '../CartWidget/CartProducts'


const CartContext = createContext<CartContextProps | null>(null)

const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cartProductsTemporal, setCartProductsTemporal] = useState<CartProviderTemporal>();
    const [cartProducts, setCartProducts] = useState<CartProviderFinal[]>(() => Storage.get('products') || []);
    const [totalPriceFinal, setTotalPriceFinal] = useState(0);
    
    const priceFinal = cartProducts.reduce((acc, item) => {
        acc += item.price
        return acc
    }, 0)

    const totalPrice = useMemo(() => {
        if (!cartProductsTemporal) {
            return 0
        }

        let total = cartProductsTemporal.baseProduct.price * cartProductsTemporal.quantity;

        cartProductsTemporal.selectedComplements.forEach((complement) => {
            total += complement.price * complement.quantity;
        });

        return total
    }, [cartProductsTemporal]);

    useEffect(() => {
        Storage.add('products', cartProducts)
        setTotalPriceFinal(priceFinal)
    }, [cartProducts])

    return (
        <CartContext.Provider value={{
            cartProducts,
            setCartProducts,
            totalPrice,
            cartProductsTemporal,
            setCartProductsTemporal,
            totalPriceFinal,
            setTotalPriceFinal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
export default CartProvider