import React,{useState} from 'react'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Context/AuthProvider';
const IniciarSesion = () =>{
    const navigate = useNavigate()
    const {singin} = useAuth()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleGoBack = () =>{
        navigate(-1)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

   const handleFormSubmit = async (e :React.FormEvent) =>{
    e.preventDefault();
    try{
        if(singin){
           await singin(form)
           navigate('/')
        }
    }catch(error){
        console.error(error)
    }
   }
    return(
        <main>
        <button className="" onClick={handleGoBack}>
            <BsFillArrowLeftCircleFill />
        </button>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label >Correo</label>
                <input name="email" type="email" value={form.email} onChange={handleOnChange} />
            </div>
            <div>
                <label >Contraseña</label>
                <input name="password" type="password" value={form.password} onChange={handleOnChange} />
            </div>
            <button type='submit'>Registrarme</button>
        </form>
    </main>
    )
}

export default IniciarSesion