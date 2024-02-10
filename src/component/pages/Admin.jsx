import React from 'react'
import {productos} from './asyncMock'
import {db} from '../../services/firebaseConfig'
import {collection, addDoc} from "firebase/firestore"

const productosRef = collection(db, 'productos')



const handleUpload = async () => {
    try {
        productos.forEach((item) => {
            delete item.id
            addDoc(productosRef, item)
        })
        console.log("Upload successful");
    } catch (error) {
        console.error("Error during upload:", error);
    }
}


const Admin = () => {
    return (
        <div>
          <h2>Admin Panel</h2>
          {/* Aquí puedes agregar contenido y funcionalidades específicas del administrador */}
          <div onClick={()=>handleUpload()}>Subir productos</div>
        </div>
      );
}
export default Admin