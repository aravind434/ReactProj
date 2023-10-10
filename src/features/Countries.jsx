import React from "react";
import { useGetAllCountriesQuery } from "../services/countries";
import { Link, Outlet } from "react-router-dom";

function Countries(){
    var {isLoading, data} = useGetAllCountriesQuery()
    console.log(isLoading)
    return(
        <div className="mybox">
            <h1>Rest countries Api</h1>
            <ul>
                {
                    isLoading && <img src='https://media.tenor.com/0iK9a1WkT40AAAAM/loading-white.gif' alt=''></img>
                }
            {
                data && data.map(country=>{
                  return <li>
                        <Link to={`countrydetails/${country.name.common}`}>{country.name.common}</Link>
                    </li>
                })
            }
            </ul>
            <Outlet></Outlet>
        </div>
    )
}

export default Countries ;