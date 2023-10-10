// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: () => `/`,
    }),

    deleteProductsById: builder.mutation({
        query:(id) => {
            return{
                url: `/${id}`,
                method: 'DELETE'
            }
        }
    }),

    addProductsById: builder.mutation({
        query:(newproduct) => {
            return{
                url: `/`,
                method: 'POST',
                body:newproduct
            }
        }
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByNameQuery, useDeleteProductsByIdMutation,useLazyGetProductsByNameQuery,useAddProductsByIdMutation} = productsApi
