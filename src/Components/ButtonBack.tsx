import { BsArrowLeftShort } from "react-icons/bs";
import {useNavigate } from "react-router-dom";

const ButtonBack = () => {
    const navigate = useNavigate ()
    const handleGoBack = () =>{
       navigate(-1)
    }
    return (
        <button className=" text-white bg-black rounded-2xl text-2xl w-6 flex justify-center " onClick={handleGoBack}>
            <BsArrowLeftShort />
        </button>
    )
}

export default ButtonBack