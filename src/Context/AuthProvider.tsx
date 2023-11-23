import { useContext, createContext, ReactNode, useState, useEffect } from 'react'
import { auth } from "../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, User, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContextType, Login, Register } from './InterfaceLogin';


const AuthContext = createContext<AuthContextType>({
    singup: null,
    singin: null,
    user: null,
    logout: async () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    console.log(user)
    const singup =  (userData:Register) => {
        const {email, password} = userData
         return  createUserWithEmailAndPassword(auth, email, password)
    }

    const singin =  (userData:Login) => {
        const { email, password } = userData;
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logout = async () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

   
   
    return (
        <AuthContext.Provider value={{ singup, user, logout, singin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider