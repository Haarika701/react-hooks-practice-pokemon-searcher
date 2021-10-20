
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import React from "react";

function PokemonCollection({pokemon}){

  const cards = pokemon.map((poke) => (
    <PokemonCard key={poke.id} pokemon={poke} />
  ));
  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  );
  }

export default PokemonCollection;
