import React, { useState, useEffect } from 'react'
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { ProductInterface } from '../Restaurant/Utilities/Interface';
import { useCart } from '../Context/CartProvider';
import { CartContextProps, CartProviderTemporal } from '../Context/InterfaceCart';
import { Link } from 'react-router-dom';


const AddToCart = ({ product }: { product: ProductInterface }) => {

    const { totalPrice, setCartProductsTemporal, cartProductsTemporal, cartProducts, setCartProducts } = useCart() as CartContextProps
    
    const handleQuantityPlus = () => {

        if (cartProductsTemporal) {
            const currentQuantity = cartProductsTemporal.quantity;
            const newCartProduct: CartProviderTemporal = {
                ...cartProductsTemporal,
                quantity: currentQuantity + 1,
            }
            setCartProductsTemporal(newCartProduct)

        }
    }

    const handleQuantityMinus = () => {

        if (cartProductsTemporal) {
            const currentQuantity = cartProductsTemporal.quantity;
            const newCartProduct: CartProviderTemporal = {
                ...cartProductsTemporal,
                quantity: currentQuantity - 1,
            }
            setCartProductsTemporal(newCartProduct)
        }
    }


    const addToCardFinal = () => {
        if (cartProductsTemporal) {
            const cartProduct = { ...cartProductsTemporal, price: totalPrice }
            setCartProducts([...cartProducts, cartProduct])
            setCartProductsTemporal(undefined)
        }
    }

    return (
        <footer className="fixed flex py-1 gap-x-5 bottom-0 w-full mb-12 bg-gray-200 h-10 px-5">
            <section className="bg-white flex gap-x-4 items-center w-1/2 justify-between px-5 rounded-xl shadow-xl">
                <button disabled={cartProductsTemporal?.quantity ? cartProductsTemporal.quantity < 2 : true} onClick={handleQuantityMinus} className="text-xl disabled:opacity-50 ">
                    <BiMinus />
                </button>
                <span>{cartProductsTemporal?.quantity}</span>
                <button onClick={handleQuantityPlus} className="text-xl">
                    <BsPlus />
                </button>
            </section>
            <section className='w-1/2 rounded-xl justify-center items-center bg-gray-300 flex'>
                {totalPrice !== 0 ? <button className=" flex bg-gray-300 "
                    onClick={addToCardFinal}>
                    Agregar <span>{totalPrice.toFixed(2)}</span>
                </button>
                    : <button>
                        <Link to='/cart'>Ir a pedidos</Link>
                    </button>}
            </section>

        </footer>
    )
}

export default AddToCart