import React from "react";
import PokemonDetails from './Pokemondetails';
import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { Link,Outlet } from "react-router-dom";

function Pokemon(){
    var {isLoading, data } = useGetPokemonByNameQuery();
    console.log(data)
    return(
        <div className="mybox" style={{display:"flex"}}>
            <div className="left-container" width="45%">
                <h1>Pokemon Names</h1>
            <ul>
                {
                    isLoading && <img src='https://media.tenor.com/0iK9a1WkT40AAAAM/loading-white.gif' alt=''></img>
                }
            {
                data && data.results.map(pokemon=>{
                  return (
                    <li className="list">
                        <Link to={`/pokemondetails/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                  )
                })
            }
            </ul>
            </div>

            <br/>

            <div className="right-container" width="45%">
                <Outlet></Outlet>

            </div>
            
        </div>
    )
}

export default Pokemon