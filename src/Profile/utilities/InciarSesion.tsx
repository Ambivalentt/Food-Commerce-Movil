import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Context/AuthProvider';
const IniciarSesion = () => {
    const navigate = useNavigate()
    const { singin } = useAuth()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (singin) {
                await singin(form)
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <main className='max-w-md mx-auto'>
            <svg className='fixed top-0 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff0030" d="M0,288L30,293.3C60,299,120,309,180,272C240,235,300,149,360,138.7C420,128,480,192,540,192C600,192,660,128,720,133.3C780,139,840,213,900,240C960,267,1020,245,1080,224C1140,203,1200,181,1260,197.3C1320,213,1380,267,1410,293.3L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <button className="" onClick={handleGoBack}>
                <BsFillArrowLeftCircleFill />
            </button>
            <form className='flex relative flex-col w-64 mx-auto justify-center items-center mt-32 gap-y-3' onSubmit={handleFormSubmit}>
            <span className='absolute -top-10 left-0 text-xl font-semibold opacity-60'>Ingresar</span>
                <div>
                    <input
                        className='border ps-1 font-medium text-sm h-8 w-64 border-gray-300'
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleOnChange}
                        placeholder='Correo electrónico'
                    />
                </div>
                <div>
                    <input
                        className='border ps-1 font-medium text-sm h-8 w-64 border-gray-300'
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleOnChange}
                        placeholder='Contraseña'
                    />
                </div>
                <div className='w-full justify-end flex'>
                    <button type='submit' className='bg-red-600 px-2 text-white rounded-xl py-1 font-semibold'>Iniciar sesion</button>
                </div>
            </form>
        </main>
    )
}

export default IniciarSesion