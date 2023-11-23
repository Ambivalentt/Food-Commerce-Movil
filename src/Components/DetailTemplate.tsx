import { useEffect, useState } from "react";
import { ProductInterface } from "../Restaurant/Utilities/Interface"
import ButtonBack from "./ButtonBack"
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import ComeplementsTemplate from "./ComplementsTemplate";
import AddToCart from "./AddToCart";

const DetailTemplate: React.FC<{ product: ProductInterface }> = ({ product }) => {
  
    const [drink, setDrink] = useState<ProductInterface[]>([])
    const [complementos, setComeplementos] = useState<ProductInterface[]>([])
    const [iceCream, setIceCream] = useState<ProductInterface[]>([]);

    useEffect(() => {
        const productData = collection(db, 'products')
        const categoryQuery = query(productData, where('category', 'in', ['complementos', 'helado', 'bebida']))
        getDocs(categoryQuery)
            .then((productSnapshot) => {
                const foundProducts: { id: string, category?: string }[] = productSnapshot.docs.map(snapshow => ({ id: snapshow.id, ...snapshow.data() }))

                setDrink(foundProducts.filter(product => product.category === 'bebida'))
                setComeplementos(foundProducts.filter(product => product.category === 'complementos'))
                setIceCream(foundProducts.filter(product => product.category === 'helado'))
            })
            .catch(error => console.error('item not found', error))

    }, []);

    return (
        <section className=" w-full h-full">
            <div className="fixed top-4 left-3">
                <ButtonBack />
            </div>
            <header className="h-56">
                <img className=" h-full w-full object-cover" src={product.img} alt="" />
            </header>
            <main className="h-1/2 bg-white">
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.details}</p>
                    <span>${product.price}</span>
                </div>

                <p className="text-xl font-semibold mb-4 py-3 border-b-2">Bebidas</p>
                {drink.map(item => (
                    <article key={item.id}>
                        <ComeplementsTemplate product={item} />
                    </article>
                ))}


                <p className="text-xl font-semibold mb-4 py-3 border-b-2">Comeplementos</p>
                {complementos.map(item => (
                    <article key={item.id} className=" mx-auto pb-5">
                        <ComeplementsTemplate product={item} />
                    </article>
                ))}
            </main>
            <footer>
                <AddToCart product={product}/>
            </footer>
        </section>
    )
}

export default DetailTemplate