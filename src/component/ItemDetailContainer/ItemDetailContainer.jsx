import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
//import { getProductosById } from '../../../asyncMock';
import "./ItemDetailContainer.css"; 
import ItemDetail from '../ItemDetail/ItemDetail';
import {doc, getDoc} from "firebase/firestore"
import {db} from '../../services/firebaseConfig';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productos, setProductos] = useState(null);
    //console.log(productos)

    useEffect(()=>{
      const  productosRef = doc(db, 'productos', id)
  getDoc(productosRef)
  .then(snapshot=>{
    const data= snapshot.data()
    const productosFormatted = {id: snapshot.id, ...data}
    setProductos(productosFormatted)
  }).catch(err=>{
    console.log(err)
  })
        //id?
        //getProductosById(id).then(res=>setProductos(res))
        //:useNavigate('/')

    }, [id])
  return (
    <>
    {
    id &&
    <ItemDetail productos = {productos}/>
}
    </>

  )
}

export default ItemDetailContainer