import React, { useEffect } from 'react';
import {useState} from 'react';
import "./ItemListContainer.css"; // Importa el archivo CSS
import { getProductos, getProductosBycategory } from '../../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const[loading, setLoading]= useState([]);
  const [productos, setProductos] = useState([]);
  //const [respuesta, setRespuesta] = useState(' a ver que pasa');
  
// const productos = [
//   {id:1,
//   nombre:'Zapato',
//   descripción:'lorem  ipsus'
// },
// {id:2,
//   nombre:'Sandalia',
//   descripción:'lorem  ipsus'
// },
// {id:3,
//   nombre:'Botas',
//   descripción:'lorem  ipsus'
// },

// ]

  // const promesa = new Promise ((resolve, reject)=> {
  //   setTimeout(()=>{
  //     //resolve('La promesa se cumplio perfectamente')
  //     resolve()
  //   },5000)
  //   })

  //   const getProductos=(bool)=> new Promise ((resolve, reject)=>{
  //     setTimeout(()=>{
  //       if(bool){
  //         resolve(productos)
  //       }else{
  //         reject('No tienes los permisos')
  //       } 
        


  //   },3000)
  // })
  const {category} = useParams()


    useEffect(()=>{
      category?
      getProductosBycategory(category).then(res=>{
        setProductos(res)
      }):
      getProductos().then(res=>{
        //console.log(res)
        setProductos(res)
        //console.log(productos)
      }).finally(()=>{
        setLoading(false)
      }
      )
      
      // getProductos(true).then((res)=>{
      //   console.log(res)
      // }).catch((err)=>console.log('error en catch'))
    },[category])
    

   // promesa.then((res)=>{
   //   setRespuesta(res)
   //   //console.log(res)
   // }).catch((rej)=>{
   //   console.log(rej)
   // })
  //console.log(promesa)
  
  return (
    <><div className='w-full flex justify-center items-center text-3xl'
    >
    {loading
    ?
    <div>CARGANDO...</div>
  :
  <ItemList productos={productos}/>
  }
    </div>
    </>
  )
}

export default ItemListContainer