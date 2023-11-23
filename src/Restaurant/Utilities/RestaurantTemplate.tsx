import Icon from '../../assets/Icon.png'
import { FaMotorcycle } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const RestaurantTemplate = () => {
    return (
            <section className='flex pt-20 flex-col gap-y-4'>
                <section className='justify-start flex items-center ps-5'>
                    <img className='w-10' src={Icon} alt="" />
                    <span className='font-extrabold text-xl'>Bembos</span>
                </section>
                <section className='flex gap-x-5 justify-center border w-72 mx-auto rounded-xl p-2'>
                    <div className='flex flex-col items-center'>
                        <p className='flex items-center gap-x-1 text-sm font-semibold opacity-70'>Entrega <BsClock /></p>
                        <span className='text-sm font-bold text-center'>17min</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='flex items-center gap-x-1 text-sm font-semibold opacity-70'>  Envío <FaMotorcycle /></p>
                        <span className='text-sm font-bold text-blue-700 text-center'>Gratis</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='flex items-center gap-x-1 text-sm font-semibold opacity-70'>Calificación <BsStar /></p>
                        <span className='text-sm font-bold text-center'>4.5 <span className='text-xs opacity-75'>(696)</span> </span>
                    </div>
                </section>
            </section>
    )
}

export default RestaurantTemplate