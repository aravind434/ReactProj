import React from "react";
import {useFormik} from 'formik';
import { useAddProductsByIdMutation } from "../../services/products.service";

function AddProducts(){
    var [addFn] = useAddProductsByIdMutation()
    var productForm = useFormik({
        initialValues:{
            "title": "",
            "price": 0,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "",
            "image": "",
            "rating": {
              "rate": 0,
              "count": 0
            }
        },
        onSubmit:(values)=>{
            console.log(values);
            addFn(values).then(()=>{
               alert('product added successfully')
            })

        }
    });
    return(
        <div className="mybox">
            <h1>Adding products from here</h1>
            <form onSubmit={productForm.handleSubmit}>
                <input type="text" placeholder="title" name="title" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input><br/>
                <input type="text" placeholder="price" name="price" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input><br/>
                <input type="text" placeholder="description" name="description" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input><br/>
                <input type="text" placeholder="category" name="category" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input><br/>
                <input type="text" placeholder="image" name="image" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input><br/>
                <button>Add Product</button>

            </form>
        </div>
    )
}

export default AddProducts;