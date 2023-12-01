import { NavLink } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    const routes = [
        {
            path: '/',
            text: <IoHomeSharp />
        },
        {
            path: '/promociones',
            text: <BiSolidDiscount />
        },
        {
            path: 'pedidos',
            text: <IoFastFoodSharp />
        },
        {
            path: 'perfil',
            text: <CgProfile />
        },
    ]

    return (
        <nav className='fixed bottom-0 z-30 w-full bg-gray-100 shadow-2xl  h-12 flex items-center '>
            <ul className='flex gap-x-2 w-full justify-center items-center'>
                {routes.map(route => (
                    <li className='text-2xl w-full flex justify-center' key={route.path}>
                        <NavLink to={route.path} key={route.path} > {route.text} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar