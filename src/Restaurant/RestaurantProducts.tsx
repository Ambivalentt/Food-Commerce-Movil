
import { useEffect, useState, useRef } from 'react'
import RestaurantTemplate from "./Utilities/RestaurantTemplate"
import { ProductInterface } from './Utilities/Interface'
import Banner from '../assets/Banner.webp'
import { db } from '../Firebase/FirebaseConfig'
import { collection, getDocs, where, query } from 'firebase/firestore'
import TemplateProductsByCateg from '../Components/TemplateProductsByCateg'
import ButtonBack from '../Components/ButtonBack'
import NavbarCategory from './Utilities/NavbarCategory'
import CartWidget from '../Components/CartWidget'

const RestaurantProducts = () => {

    const [productsByCategory, setProductsByCategory] = useState<{ [key: string]: ProductInterface[] }>({});
    const [dataLoaded, setDataLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollY]);

    useEffect(() => {
        const productsDB = collection(db, 'products');

        getDocs(productsDB)
            .then(snapshots => {
                const productsData: ProductInterface[] = snapshots.docs.map(snapshot => ({ id: snapshot.id, ...snapshot.data() }));

                // Calcular categorías únicas y llenar productsByCategory aquí
                const allCategories = Array.from(new Set(productsData.map(item => item.category)));
                const categoriesMap: { [key: string]: ProductInterface[] } = {};

                allCategories.forEach(category => {
                    if (category) {
                        const productsInCategory = productsData.filter(product => product.category === category)
                        categoriesMap[category] = productsInCategory
                    }
                });

                setProductsByCategory(categoriesMap);
                setDataLoaded(true);
            })
            .catch(error => {
                console.error("Error database Firebase", error);

            })
            .finally(() => setDataLoaded(true))
    }, []);

    const categories = Object.keys(productsByCategory)

    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollToCategory = (category: string) => {
        const sectionRef = sectionRefs.current[category];

        if (sectionRef) {
            sectionRef.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="pt-16">
            <RestaurantTemplate />
            <section className="pt-5">
                <main className=' pb-16  bg-white '>

                    <header className={`fixed top-0 left-0 overflow-hidden speed ${scrollY > 200 ? 'h-20 z-30 brightness-50 ' : 'h-full z-10'}`}>
                        <img className='' src={Banner} alt="" />
                    </header>
                    <div className='z-40 top-5 left-4 fixed'>
                        <ButtonBack />
                    </div>
                    <nav className={`bg-white sticky h-full z-30 px-3 ${scrollY > 170 ? ' top-16' : ''}`}>
                        <NavbarCategory allCategories={categories}
                            scrollToCategory={scrollToCategory} />
                    </nav>

                    <section className='sticky z-20 bg-white w-full px-3 py-10 '>
                        {dataLoaded ? (
                            <main className='relative'>
                                {categories.map(category => (
                                    <div  key={category} ref={(ref) => (sectionRefs.current[category] = ref)}>
                                        <TemplateProductsByCateg
                                            key={category}
                                            category={category}
                                            products={productsByCategory[category]}
                                        />
                                    </div>
                                ))}
                                <CartWidget />
                            </main>
                        ) : (
                            <p>Cargando...</p>
                        )}
                    </section>
                </main>
            </section>
        </main>
    )
}

export default RestaurantProducts

