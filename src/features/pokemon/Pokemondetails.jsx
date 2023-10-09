import React from "react";
import { useGetPokemondetailsByNameQuery } from "../../services/pokemon";

function Pokemondetails(props){
    var { pkdetails } = props
    console.log("welcome to " ,pkdetails)
    var {data, isLoading} = useGetPokemondetailsByNameQuery(pkdetails)

    return(
        <div className="mybox">
            <h1>
                details of pkmon {pkdetails}
            </h1>
                {
                    isLoading && <img src='https://media.tenor.com/0iK9a1WkT40AAAAM/loading-white.gif' alt=''></img>
                }
                {
                        data && 
                            <i>height of pkmon {data.height}</i>
                
                }
                
        </div>
    )
}

export default Pokemondetails;