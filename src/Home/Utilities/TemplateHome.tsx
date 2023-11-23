import { FaMotorcycle } from "react-icons/fa6";
import Banner from '../../assets/Banner.webp'
import { BsClock } from "react-icons/bs";
import Icon from '../../assets/icon.png'
import { TemplateHomeProps } from "./interface";
import Restaurant404 from '../../assets/Restaurant404.png'
import { Link } from "react-router-dom"

const TemplateHome: React.FC<TemplateHomeProps> = (props) => {
    const { restaurant } = props;
 
    return (
        <Link to={restaurant.path}>
            <article
                className={`rounded-xl overflow-hidden shadow-xl`}
            >
                <header className="overflow-hidden h-24">
                    <img className=" object-cover h-full w-full" src={restaurant.name === 'Bembos' ? Banner : Restaurant404} alt="" />
                </header>
                <main className="flex h-16 items-center">
                    <div className="rounded-full overflow-hidden">
                        <img className="w-14" src={restaurant.name === 'Bembos' ? Icon : ''} alt="" />
                    </div>
                    <div>
                        <p className="font-semibold">{restaurant.name}1</p>
                        <div className="flex flex-row">
                            <span className="flex items-center gap-x-2 text-sm"> <BsClock /> 31min - <FaMotorcycle /> Envio gratis</span>
                        </div>
                    </div>
                </main>
            </article>
        </Link>
    )
}

export default TemplateHome