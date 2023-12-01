import { useCart } from "../Context/CartProvider"
import { CartContextProps } from "../Context/InterfaceCart"
import ButtonBack from "../Components/ButtonBack";
import BtnRemove from "../Components/BtnRemove";
import EmptyCart from "../assets/EmptyCart.png";
import { useAuth } from "../Context/AuthProvider";
import { OrdersProps } from "../Orders/InterfaceOrder";
import { useNavigate } from "react-router-dom";

const CartProducts = () => {
    const { cartProducts, totalPriceFinal, setOrders, setCartProducts } = useCart() as CartContextProps;
    const { user } = useAuth()

    const navigate = useNavigate();
    const goToOrders = () => navigate('/pedidos');

    const ordersToStorage = () => {
        const newOrder: OrdersProps = {
            id: Date.now().toString(),
            product: cartProducts.map(product => ({
                id: product.id,
                price: product.price,
                baseProduct: product.baseProduct,
                quantity: product.quantity,
                selectedComplements: product.selectedComplements
            })),
            date: new Date().toLocaleString(),
            status: 'Pendiente',
            total: totalPriceFinal || 0
        };

        setOrders((prevOrders: OrdersProps[]) => [...prevOrders, newOrder]);
        setCartProducts([]);
        goToOrders()
    }


    return (
        <section className="max-w-sm w-full px-2 mx-auto my-5">
            <ButtonBack />
            {cartProducts.length > 0 ? <> {cartProducts.map(productDetail => (

                <article className="flex my-4 shadow-xl rounded-xl relative" key={productDetail.time} >
                    <figure className="w-1/4 overflow-hidden rounded-s-xl">
                        <img className="w-20" src={productDetail.baseProduct.img} alt="" />
                    </figure>
                    <div className="w-3/4 ">
                        <p className="text-sm font-semibold">{productDetail.quantity} {productDetail.baseProduct.title}</p>
                        <p className="text-xs">{productDetail.baseProduct.details}</p>
                        <div className="mt-2">
                            {productDetail.selectedComplements.length > 0 && (
                                <span className="font-semibold text-sm">Adicionales:</span>
                            )}
                            {productDetail.selectedComplements.map(complements => (
                                <article key={complements.id} className="flex mb-2">
                                    <figure className="w-1/4 overflow-hidden flexitems-center justify-center px-4">
                                        <img className=" w-full h-full  object-cover" src={complements.img} alt="" />
                                    </figure>
                                    <div className="w-3/4">
                                        <p className="text-[0.60em] font-semibold">{complements.name}</p>
                                        <p className="text-[0.60em] opacity-80">{complements.details}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <BtnRemove productTime={productDetail.time} />
                </article>


            ))}</>
                :
                <img src={EmptyCart} alt="" />}
            {cartProducts.length > 0 && (
                <div className="w-full flex items-end pb-10 h-20 flex-col">
                    <button onClick={ordersToStorage}
                        className=" disabled:opacity-60 bg-gray-300 w-40 text-center rounded-xl font-bold text-gray-900"
                        disabled={user === null}>
                        Pagar ${totalPriceFinal?.toFixed(2)}
                    </button>
                    {user == null &&
                        <span className="text-xs opacity-90 font-bold text-red-600">
                            Necesitas Incisar-Sesion para cancelar la orden
                        </span>}
                </div>
            )}
        </section>


    )
}

export default CartProducts