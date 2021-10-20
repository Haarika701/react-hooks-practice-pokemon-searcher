import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [search,setSearch] = useState('')
  // 2x useState (1 for the original data, and 1 for holding the filtered version)
  // useEffect();
  const [pokemon,setPokemon] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then(setPokemon);
  }, []);

  const pokeDisplay = pokemon.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearch=(e)=>{
    setSearch(e.target.value)
    
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search = {search} handleSearch  = {handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokeDisplay}/>
    </Container>
  );
}

export default PokemonPage;
