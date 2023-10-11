import React from "react";
import { useDeleteProductsByIdMutation, useGetProductsByNameQuery, useLazyGetProductsByNameQuery } from "../../services/products.service";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Products(){
    var {data, isLoading} = useGetProductsByNameQuery();
    var [rfn] = useLazyGetProductsByNameQuery();
    var [fn,s] = useDeleteProductsByIdMutation();
    var navigation = useNavigate();
    console.log(data);

    //delete the item from pure axios, we can delete by using toolkit as well
    // function deleteProduct(id){
    //     axios.delete(`http://localhost:4000/products/${id}`).then(()=>{
    //         alert("item deleted", id)
    //     })
    // }

    //delete the item by using query
    function deleteProduct(id){
            fn(id).then(()=>{
                alert("Are you Sure...!");
                rfn()
            })
        }

        function editProduct(id){
            navigation(`/editproduct/${id}`);
        }

    return(
        <div className="mybox">
            <h1>Products details</h1>
            <ul id="products">
            {
                isLoading && <img src="https://i.pinimg.com/originals/8b/34/b0/8b34b0ba0e40ad966d14ef1bdf63d3db.gif" alt=""/>
            }
           
            {
                
                data && data.map(product=>{
                    return(
                            <li>
                                <div className="img-parent">
                                    <img src={product.image} alt=""/>
                                </div>
                            
                            {product.title}
                            {/* <button onClick={()=>{deleteProduct(product.id)}}>DELETE</button> */}
                            {/* <button onClick={()=>{fn(product.id)}}>DELETE</button> */}
                            <i className='delete bi bi-trash3' onClick={()=>{deleteProduct(product.id)}}></i>
                            <i className='edit bi bi-pencil-square' onClick={()=>{editProduct(product.id)}}></i>
                            </li>
                    )
                })
                
            }
            </ul>
        </div>
    )
}

export default Products