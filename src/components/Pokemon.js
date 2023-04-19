import { Typography } from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = useState('');
  const name = useParams().name

  useEffect(() => {
   axios
        .get("https://pokeapi.co/api/v2/pokemon/" + name)
        .then((res) => setPokemon(res.data))
        .catch((e) => console.log(e))
  }, []);

  // name
  // .weight
  // .types.type.name
  // .abilities.ability.name
  // .sprites.other.official-artwork.front_default

  const types = pokemon?.types?.map(unTipo=> {return <li>{unTipo.type.name}</li>})
  const abilities = pokemon.abilities?.map(unaAbility=> {return <li>{unaAbility.ability.name}</li>})
  
  return (
    <>
      <Typography variant='h3'>Pokemon: {pokemon.name} </Typography>
      <Typography variant='h5'>Peso: {pokemon.weight} </Typography>
      <Typography variant='h5'>Tipos </Typography>
      <ul>
        {types}
      </ul>
      <Typography variant='h5'>Habilidades </Typography>
      <ul>
      {abilities}
      </ul>
      <Typography variant='h5'>sprites.other.official-artwork.front_default </Typography>
      <Typography variant='h5'>Imagen</Typography>
      <image src={pokemon?.sprites?.other['official-artwork'].front_default} width={"200px"} height={"200px"}/>

      <img
            width="200px"
            // height="%"
            src={pokemon?.sprites?.other['official-artwork'].front_default}
            alt="foto de producto"
          ></img>


    


    </>
  );
}

export default Pokemon;
