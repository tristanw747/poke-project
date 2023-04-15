import React, { useEffect, useState, useRef } from 'react';
import { usePokemons } from '../../context/PokemonsProvider';


function SearchBar() {
  const { pokemons, setPokemons } = usePokemons();
  // const previous = useRef(pokemons);
  // console.log(pokemons)
  // const [state, setState] = useState([]);

  //   setState(pokemons)

  // console.log(state)
  // useEffect(() => {
  //    setState(pokemons)
  //   return () => {
  //     pokemons
  // }
  // }, [])
  // console.log(state)

  function convertState(event) {
    // setPokemons(originalz)
    let regexz = new RegExp(event.target.value, "gi");
    const filtPokemon = pokemons.filter(pokemon => pokemon.name.match(regexz))
    // console.log(originalz)
    setPokemons(filtPokemon)
  }




  // function handleSearchTermChange(event) {

  //   useEffect(() => {

  //     console.log(pokemons)
  //     const filtPokemon = pokemons.filter(pokemon => pokemon === event.target.value)
  //     setPokemons(filtPokemon)
  //   }, [])



  // }




  return (
    <div className="heading">
      <div className="">
        <label className="label">Search</label>
        <input
          className="input"
          onChange={convertState}
        />
      </div>
    </div>
  )
}

export default SearchBar