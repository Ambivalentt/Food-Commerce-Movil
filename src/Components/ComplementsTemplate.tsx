import React, { useState } from 'react'
import { ProductInterface } from "../Restaurant/Utilities/Interface"
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useCart } from '../Context/CartProvider';
import { CartContextProps, CartComeplements, CartProviderTemporal } from '../Context/InterfaceCart';

const ComeplementsTemplate: React.FC<{ product: ProductInterface }> = ({ product }) => {

    const { cartProductsTemporal, setCartProductsTemporal } = useCart() as CartContextProps
    const [quantity, setQuantity] = useState(0)

    const complementToAdd: CartComeplements = {
        id: product.id,
        name: product.name!,
        price: product.price || 0,
        quantity: quantity + 1,
        img:product.img || '',
        details:product.details || '' ,
    }

    const handleButtonQuantityPlus = () => {
        setQuantity(quantity + 1)

        if (cartProductsTemporal) {
            const existingItemIndex = cartProductsTemporal.selectedComplements.findIndex(item => item.id === complementToAdd.id);
            if (existingItemIndex >= 0) {
                const newComeplementsProducts = { ...cartProductsTemporal }
                newComeplementsProducts.selectedComplements[existingItemIndex].quantity = quantity + 1
                setCartProductsTemporal(newComeplementsProducts);
            } else {
                const newComeplementsProducts: CartProviderTemporal = {
                    ...cartProductsTemporal,
                    selectedComplements: [
                        ...cartProductsTemporal.selectedComplements, complementToAdd
                    ]
                }
                setCartProductsTemporal(newComeplementsProducts)
            }
        }

    }

    const handleButtonQuantityMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);

            if (cartProductsTemporal) {
                const existingItemIndex = cartProductsTemporal.selectedComplements.findIndex(item => item.id === complementToAdd.id);
                if (existingItemIndex >= 0) {
                    const newComeplementsProducts = { ...cartProductsTemporal }
                    newComeplementsProducts.selectedComplements[existingItemIndex].quantity = quantity - 1

                    if (newComeplementsProducts.selectedComplements[existingItemIndex].quantity === 0) {
                        newComeplementsProducts.selectedComplements = newComeplementsProducts.selectedComplements.filter((item) => item.id !== complementToAdd.id );
                    }
                    
                    setCartProductsTemporal(newComeplementsProducts);
                }
            }
        }
    }

    return (
        <section className='flex justify-between border-b-2 pb-2 px-8'>
            <div className='flex gap-x-5'>
                <figure className='h-10 w-10 rounded-xl overflow-hidden flex items-center'>
                    <img className='w-14 h-20 object-cover' src={product.img} alt="" />
                </figure>
                <div className='flex flex-col justify-center'>
                    <p className='text-xs font-semibold'>{product.name}</p>
                    <span className='font-bold text-sm flex'>+S/{product.price}</span>
                </div>
            </div>
            <section className='flex items-center justify-center w-10'>
                {quantity > 0 ?
                    <div className='flex items-center justify-center gapx-2'>
                        <button className='text-sm' onClick={handleButtonQuantityMinus}>
                            <BiMinus />
                        </button>
                        <span className='text-base font-semibold'>
                            {quantity}
                        </span>
                        <button className='text-normal' onClick={handleButtonQuantityPlus}>
                            <BsPlus />
                        </button>
                    </div>
                    :
                    <button className='text-xl' onClick={handleButtonQuantityPlus}>
                        <BsPlus />
                    </button>
                }
            </section>
        </section>
    )
}

export default ComeplementsTemplate