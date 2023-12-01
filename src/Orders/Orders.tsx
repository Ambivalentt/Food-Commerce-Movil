import React from 'react'
import { useCart } from "../Context/CartProvider"
import { CartContextProps } from "../Context/InterfaceCart"
const Orders = () => {
    const { orders } = useCart() as CartContextProps;

    return (
        <main className='flex flex-col gap-y-4 py-4'>
            {orders.map(order =>
                <section key={order.date} className="shadow-xl">
                    {order.product.map(product => (
                        <article key={order.date} className="flex px-2 gap-x-3">
                            <figure className="w-1/3 rounded-b-xl overflow-hidden">
                                <img src={product.baseProduct.img} alt="" />
                            </figure>
                            <div className="w-2/3 text-xs">
                                <p className='font-semibold'>{product.baseProduct.title}</p>
                                <p className='opacity-75'>{product.baseProduct.details}</p>
                                {product.selectedComplements && product.selectedComplements.map(complement => (
                                    <section key={order.date} className='flex pt-2 justify-start items-center gap-x-2'>
                                        <figure className='w-1/5 h-10 overflow-hidden flex justify-center items-center rounded-xl'>
                                            <img className='h-20 object-contain ' src={complement.img} alt="" />
                                        </figure>
                                        <div>
                                            <p className='font-semibold'>{complement.name}</p>
                                        </div>
                                    </section>
                                ))}
                            </div>

                        </article>

                    ))}
                    <div className='flex justify-end px-4'>
                        <span className='flex justify-end pe-5'>{order.date}</span>
                        <p className='opacity-75'>{order.status}</p>
                    </div>
                </section>
            )}

        </main>
    )
}

export default Orders