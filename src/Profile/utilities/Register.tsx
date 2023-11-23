import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc, getFirestore, getDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { FormState } from './type';
import './LoadingBtn.css'
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const [submitting, setSubmitting] = useState<boolean>(false);
    const { singup } = useAuth()
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    };

    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        photoFile: null
    })


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = event.target
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files![0] : value
        }))
    }



    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true);
        const loadingToast = toast.loading('Creando Cuenta...', { autoClose: false });
        try {
            if (singup) {
                const userCredential = await singup(form);
                const user = userCredential.user;

                //UPDATED PHOTO URL //FIREBASE STORAGE
                const storage = getStorage()
                const photoRef = ref(storage, `profile_photo/${user.uid}`)
                await uploadBytes(photoRef, form.photoFile!);
                const photoFile = await getDownloadURL(photoRef)
                //

                await updateProfile(user, {    //updateProfile withProvider
                    displayName: form.name,
                    photoURL: photoFile
                })
                const firestore = getFirestore()

                const userDocRef = doc(firestore, 'users', user.uid);
                await setDoc(userDocRef, {    //without AuthProvider
                    address: form.address,
                    phone: form.phone
                })
                setSubmitting(false);
                toast.success('Cuenta creada exitosamente');

                setTimeout(() => {
                    navigate('/')
                }, 2500);
            }
        } catch (error) {
            toast.error('Error al crear la cuenta');
        } finally {
            setSubmitting(false);
            toast.dismiss(loadingToast);
        }

    }

    return (
        <main className='max-w-md px-5 my-20 mx-auto flex justify-center flex-col items-center'>
            <svg className='fixed top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff0030" fill-opacity="4" d="M0,288L30,293.3C60,299,120,309,180,272C240,235,300,149,360,138.7C420,128,480,192,540,192C600,192,660,128,720,133.3C780,139,840,213,900,240C960,267,1020,245,1080,224C1140,203,1200,181,1260,197.3C1320,213,1380,267,1410,293.3L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <button className="fixed top-4 left-4 text-xl" onClick={handleGoBack}>
                <BsFillArrowLeftCircleFill />
            </button>
            <form onSubmit={handleFormSubmit}>
                {[
                    { label: 'Nombre', name: 'name', type: 'text' },
                    { label: 'Email', name: 'email', type: 'email' },
                    { label: 'Contraseña', name: 'password', type: 'password' },
                    { label: 'Direccion', name: 'address', type: 'text' },
                    { label: 'Telefono', name: 'phone', type: 'number' },
                ].map((field) => (
                    <div className='pb-2 font-semibold opacity-80' key={field.label}>
                        <input autoComplete='off' className='border ps-1 font-medium text-sm h-8 w-64 border-gray-300' required
                            onChange={handleOnChange}
                            name={field.name}
                            type={field.type}
                            value={(form[field.name] as string)}
                            placeholder={field.label}
                        />
                    </div>
                ))}
                <div className='flex flex-col mt-4 '>
                    <label className='font-semibold text-gray-600 text-xs' >Selecciona una foto</label>
                    <div className='text-xs border w-64 h-8 flex items-center justify-center border-gray-300'>
                        <input required name="photoFile" type="file" accept='image/*' onChange={handleOnChange} />
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <button
                        className={`border border-[#ff0030] p-1 rounded-xl mt-4 shadow-xl ${submitting ? 'loading' : ''}`}
                        type='submit'
                        disabled={submitting}
                    >
                        {submitting ? 'Creando Cuenta...' : 'Registrarme'}
                    </button>
                    <ToastContainer style={{display: 'none'}} />
                </div>
            </form>
        </main>
    )
}

export default Register