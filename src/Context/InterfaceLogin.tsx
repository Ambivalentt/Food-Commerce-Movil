import { UserCredential, User } from "firebase/auth";

export interface Register  {
    name:string
    email:string
    password:string
}

export interface Login {
    email:string;
    password:string
}
export interface AuthContextType {
    singup: ((userData: Register) => Promise<UserCredential>) | null;
    singin: ((userData:Login)=> Promise<UserCredential>) | null
    user: User | null;
    logout: () => Promise<void>;
  }

