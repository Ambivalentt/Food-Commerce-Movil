import { Link } from 'react-router-dom'
import stacklogo from '../assets/stacklogo.png'
import './utilities/profile.css'
import ProfileSettings from "./utilities/ProfileSettings"
import { useAuth } from "../Context/AuthProvider"

const Profile = () => {
    const { user } = useAuth()

    const routes = [
        {
            path: "/perfil/iniciar-sesion",
            name: "Inciar Sesion"
        },
        {
            path: "/perfil/registrarme",
            name: "Registrarme"
        }
    ];

    return (
        <>
            {user === null ?
                <main className='mt-24 flex justify-center items-center flex-col pb-36'>
                    <header className='flex justify-center flex-col gap-y-4 items-center'>
                        <img className='w-24' src={stacklogo} alt="" />
                        <p className='text-2xl font-semibold custom_font text-center px-8'>Te damos la bienvenida</p>
                    </header>
                    <section className='flex flex-col mt-20 custom_font gap-y-2 font-normal text-center text-xl'>
                        {routes.map(route => (
                            <Link to={route.path} key={route.name}><button>{route.name}</button></Link>
                        ))}
                    </section>
                </main> : <ProfileSettings />}
        </>
    )
}

export default Profile