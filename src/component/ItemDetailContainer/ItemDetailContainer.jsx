import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { getProductosById } from '../../../asyncMock';
import "./ItemDetailContainer.css"; 
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productos, setProductos] = useState(null);
    //console.log(productos)

    useEffect(()=>{
        id?
        getProductosById(id).then(res=>setProductos(res))
        :useNavigate('/')

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