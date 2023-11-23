import TemplateHome from "./Utilities/TemplateHome"
import { Link } from 'react-router-dom'
import restaurantsNames from "../Components/RestaurantsNames"
import { useParams } from "react-router-dom"
const Home = () => {
    const {restaurants} = useParams()
    
    return (
        <main>
            <p>Restaurantes disponibles:</p>
            {restaurantsNames.map((restaurant) => (
                   <section key={restaurant.path} className={`mb-10 ${restaurant.name !== 'Bembos' ? 'pointer-events-none opacity-50' : ''}`}>
                        <TemplateHome restaurant={restaurant} />
                   </section>
            ))}
        </main>


    )
}
export default Home