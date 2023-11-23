import { useAuth } from "../../Context/AuthProvider"
import { useNavigate } from "react-router-dom"
import { getDoc, doc, getFirestore } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { UserData } from "./InterfaceInfoDetails"
const ProfileSettings = () => {
    const { logout, user } = useAuth()
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData | null>(null);

    const handleNavigate = () => {
        logout()
        navigate("/")
    };

    useEffect(() => {
        const fetchUserData = async () => {
            if (user  ) {
                const docRef = doc(getFirestore(), 'users', user.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setUserData(docSnap.data() as UserData)
                }
            }
        }
        fetchUserData()
    }, [user])

    return (

        <section className="w-full">
            <header className="flex px-4 max-w-xl w-full mx-auto pb-4 gap-x-5">
                <figure>
                 {user?.photoURL && <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="profile" />}
                </figure>
                <div className=" flex flex-col items-center justify-center">
                    <span className="text-sm">Bienvenido!</span>
                    <h1 className="text-xl">{user?.displayName}</h1>
                </div>
            </header>
            <main className="w-full max-w-xl  mx-auto flex flex-col px-4">
                <table>
                    <tbody className="flex flex-col gap-y-3 max-w-sm m-auto">
                        <tr>
                            <th className="opacity-80">Detalles de la cuenta:</th>
                        </tr>
                        {[
                            { label: 'Email:', value: user?.email },
                            { label: 'Telefono:', value: userData?.phone },
                            { label: 'Ubicacion:', value: userData?.address },
                        ].map((item, index) => (
                            <tr className="border-b"
                                key={index}>
                                <td className="w-28">{item.label}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="max-w-xl flex justify-end py-6">
                    <button className="w-36 flex bg-red-500 text-white font-semibold justify-center rounded-xl" onClick={handleNavigate}>Salir de la cuenta</button>
                </div>
            </main>
        </section>
    )
}

export default ProfileSettings