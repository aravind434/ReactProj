import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductpopulateByIdQuery, useLazyGetProductpopulateByIdQuery, useLazyGetProductsByNameQuery, useUpdateProductsByIdMutation } from "../../services/products.service";
import { useFormik } from "formik";

function EditProduct(){
    var {pid} = useParams();
    var {data,isLoading} = useGetProductpopulateByIdQuery(pid);
    var [ufn] = useUpdateProductsByIdMutation();
    var [rfn] = useLazyGetProductsByNameQuery();
    // var [rfn] = useLazyGetProductpopulateByIdQuery();

   var editForm = useFormik({
    initialValues:data,
    onSubmit:(values)=>{
        ufn(values).then(()=>{
            alert('Product updated successfully...!');
            rfn();
        }) 
    },
    
   });

   React.useEffect(()=>{
    editForm.setValues(data)
   },[data])

    return(
        <div>
            {/* {JSON.stringify(editForm)} */}

        <h1>edit product...!</h1>
            <form onSubmit={editForm.handleSubmit}>
                <input type="text" placeholder="title" value={editForm.values?.title} name="title"  onChange={editForm.handleChange} onBlur={editForm.handleBlur}/><br/>
                <input type="text" placeholder="price" value={editForm.values?.price} name="price" onChange={editForm.handleChange} onBlur={editForm.handleBlur}/><br/>
                <input type="text" placeholder="description" value={editForm.values?.description} name="description" onChange={editForm.handleChange} onBlur={editForm.handleBlur}/><br/>
                <input type="text" placeholder="category" value={editForm.values?.category} name="category" onChange={editForm.handleChange} onBlur={editForm.handleBlur}/><br/>
                <input type="text" placeholder="image" value={editForm.values?.image} name="image" onChange={editForm.handleChange} onBlur={editForm.handleBlur}/><br/>
                <button>Update Product</button>

            </form>
        </div>


    )
}

export default EditProduct;