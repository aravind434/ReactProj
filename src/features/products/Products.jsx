import React from "react";
import { useGetAllProductsQuery } from "../../services/products";

function Products(){
    var {isLoading, data} = useGetAllProductsQuery()
    console.log(isLoading)
    return(
        <div className="mybox">
            <h1>Products Api</h1>
            <ul>
                {
                    isLoading && <img src='https://cdn.pixabay.com/animation/2023/04/16/16/41/16-41-15-249_512.gif' alt=''></img>
                }
            {
                data && data.map(product=>{
                  return <li>{product.title}</li>
                })
            }
            </ul>
        </div>
    )
}

export default Products ;