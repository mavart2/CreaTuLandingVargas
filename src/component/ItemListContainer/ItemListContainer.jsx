import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./ItemListContainer.css"; // Importa el archivo CSS
import { getProductos, getProductosBycategory } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import { MyContext } from "../Context/MyContext";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState([true]);
  const [productos, setProductos] = useState([]);

  const { artist } = useContext(MyContext);
  //console.log(artist)
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
  const { category } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const result = category
          ? await getProductosBycategory(category)
          : await getProductos();
        setProductos(result);
      } catch (error) {
        console.log("Error en el fetch de useEffect:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [category]);

  return (
    <>
      <div className="w-full flex justify-center items-center text-3xl">
        {loading ? <div>CARGANDO...</div> : <ItemList productos={productos} />}
      </div>
    </>
  );
};

export default ItemListContainer;
