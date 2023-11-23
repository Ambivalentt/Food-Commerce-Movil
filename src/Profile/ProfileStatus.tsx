import { useParams } from "react-router-dom"
import Register from "./utilities/Register"
import IniciarSesion from "./utilities/InciarSesion"

const ProfileStatus = () => {
    const {status} = useParams()
    return(
      <>  
       {status === 'registrarme' ? <Register/> : <IniciarSesion/>}
      </>
    )
}

export default ProfileStatus