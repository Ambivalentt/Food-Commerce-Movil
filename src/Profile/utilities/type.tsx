export type FormState = {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    photoFile: File | null;
    [key: string]: string | File | null; // Índice de tipo string
};