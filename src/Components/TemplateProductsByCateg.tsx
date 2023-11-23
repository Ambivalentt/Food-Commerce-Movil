import React, { useRef, RefObject } from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TemplateProductsByCategProps } from '../Restaurant/Utilities/Interface'
import { useParams } from 'react-router-dom';


const TemplateProductsByCateg: React.FC<TemplateProductsByCategProps> = ({ category, products }) => {
    const { restaurants } = useParams()

    const swiperRef = useRef<SwiperType | null>(null);

    const ingredientsList = products.map(product => product.ingredients ? product.ingredients.join(', ') : '')

    return (
        <>
            <p className='text-xl font-bold opacity-95 first-letter:capitalize py-10' >{category}</p>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={2}
                loop
                onSlideChange={() => null}
            >
                {products.map(product => (
                    <SwiperSlide key={product.id}>
                        <Link to={`/${restaurants}/${product.id}`}>
                            <article className='h-3/5 rounded-t-lg overflow-hidden'>
                                <img className='object-cover w-full h-44' src={product.img} alt={product.name} />
                            </article>
                            <section className='h-2/5'>
                                <p className='font-semibold opacity-95'>{product.name}</p>
                                <p className='line-clamp-3 text-xs opacity-70'>{ingredientsList}</p>
                                <span className='font-bold text-sm'>S/{product.price}</span>
                            </section>
                        </Link>
                    </SwiperSlide >

                ))}
            </Swiper>
        </>
    )
}

export default TemplateProductsByCateg