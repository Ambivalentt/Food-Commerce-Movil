import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase/FirebaseConfig'
import { ProductInterface } from './Utilities/Interface'
import DetailTemplate from '../Components/DetailTemplate'
import { useCart } from '../Context/CartProvider'
import { CartContextProps } from '../Context/InterfaceCart'

const ProductDetail = () => {
    const { cartProductsTemporal ,setCartProductsTemporal } = useCart() as CartContextProps
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [product, setProduct] = useState<ProductInterface>({
        id: '',
        category: '',
        details: '',
        img: '',
        ingredients: [],
        name: '',
        price: 0,
        title: '',
        type: '',
    });


    useEffect(() => {
        setLoading(true)
        if (id) {
            const productData = doc(db, 'products', id);
            getDoc(productData)
                .then((productSnapshot) => {
                    const foundProduct: ProductInterface = { id: productSnapshot.id, ...productSnapshot.data() };
                    setProduct(foundProduct);

                    const productDetails = {
                        id: foundProduct.id,
                        baseProduct: {
                            id: foundProduct.id,
                            name: foundProduct.name || '',
                            img: foundProduct.img,
                            price: foundProduct.price || 0,
                            title: foundProduct.title,
                            type: foundProduct.type,
                            ingredients: foundProduct.ingredients,
                            details: foundProduct.details,
                        },
                        quantity: 1, // Puedes establecer la cantidad inicial
                        time:new Date().toLocaleTimeString(),
                        selectedComplements: [], // Inicialmente, no hay complementos seleccionados
                    };

                    setCartProductsTemporal(productDetails);
                })
                .catch(error => console.error('item not found', error))
                .finally(() => setLoading(false))
        }
    }, [id]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DetailTemplate product={product} />
            )}
        </>
    )
}

export default ProductDetail