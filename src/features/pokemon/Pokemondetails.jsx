import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemondetailsByNameQuery } from "../../services/pokemon";

function Pokemondetails(){
    var {pkdetails} = useParams(pkdetails);
    var {data, isLoading} = useGetPokemondetailsByNameQuery(pkdetails)
    return(
        <div className="pkdetails">
            <h1>
                details of pkmon {pkdetails}
            </h1>

        </div>
    )
}

export default Pokemondetails;