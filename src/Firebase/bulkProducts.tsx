// import { collection, writeBatch, doc  } from "firebase/firestore"
// import {db} from './FirebaseConfig'
// import PRODUCTS from "../Restaurant/productsJSON";



// export const uploadProducts = () => {
//     const batch = writeBatch(db);
//     PRODUCTS.forEach(({ ...restOfProduct }) => {
//         const productRef = collection(db, "products");
//         const productDocRef = doc(productRef);
//         batch.set(productDocRef, restOfProduct);
//     });

//     batch.commit()
// }
