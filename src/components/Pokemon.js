import {Paper, Stack, Typography} from "@mui/material";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = useState("");
  const name = useParams().name;

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((res) => setPokemon(res.data))
      .catch((e) => console.log(e));
  }, []);

  const types = pokemon.types?.map((unTipo) => {
    return <li>{unTipo.type.name}</li>;
  });
  const abilities = pokemon.abilities?.map((unaAbility) => {
    return <li>{unaAbility.ability.name}</li>;
  });

  return (
    <>
      <Stack direction="column" alignItems={"center"}>
      <Paper sx={{width:"50%", minWidth:"300px", mt:5}} elevation={12}>
      <Stack direction="column" alignItems={"center"}>
        <Typography variant="h3">Pokemon: {pokemon.name} </Typography>
        <Typography variant="h5">Peso: {pokemon.weight} </Typography>
        <Typography variant="h5">Tipos </Typography>
        <ul>{types}</ul>
        <Typography variant="h5">Habilidades </Typography>
        <ul>{abilities}</ul>
        <Typography variant="h5">Imagen</Typography>
        <img
          width="200px"
          src={pokemon?.sprites?.other["official-artwork"].front_default}
          alt="foto de pokemon"
        ></img>
      </Stack>
      </Paper>
      </Stack>
    </>
  );
}

export default Pokemon;
