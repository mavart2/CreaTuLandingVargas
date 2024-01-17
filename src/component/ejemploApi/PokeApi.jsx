// GET url parametros
//URL params
// https://pokeapi.co/api/v2/pokemon/ditto/
// https://google.com/search
//q (required)= string
//?pais=string
// https://google.com/search?q=messi&pais=argentina 
//api de mercado libre..revisar
import React, { useState, useEffect } from 'react';

// ... (resto de tus importaciones y código)

const PokeApi = () => {

  
  
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);
  console.log('id', id);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, [id])
  

  const handleSiguiente = () => {
    setId(id+1)
  }
  const handleAnterior = ()=>{
    id >1 && setId(id-1)
  }

  return (
    <div>
      { pokemon &&
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          <button onClick={handleAnterior}>anterior</button>
          <button onClick={()=>handleSiguiente()}>siguiente</button>
        </>
      }
    </div>
  );
};

export default PokeApi;
