import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const routes = [
        {
            path: '/',
            text: 'Inicio'
        },
        {
            path: '/promociones',
            text: 'Promociones'
        },
        {
            path: 'pedidos',
            text: 'Pedidos'
        },
        {
            path: 'perfil',
            text: 'Mi Perfil'
        },
    ]

    return (
        <nav className='fixed bottom-0 z-30 w-full bg-white h-8 flex items-center'>
            <ul className='flex gap-x-2'>
                {routes.map(route => (
                    <li key={route.path}>
                        <NavLink to={route.path} key={route.path} > {route.text} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar