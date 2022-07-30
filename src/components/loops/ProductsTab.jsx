/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import products from "../../data/products";



export default () => {

    const listProducts = products.map(products =>{
        return (
            <tr style={{textAlign:'start'}} key={products.id}> 
                <td>
                    {products.id}
                </td>
                <td>
                    {products.name}
                </td>
                <td>
                    R$ {products.value}
                </td>
            </tr>
            
        )
    })

    return (
        <div>
            <table style={{margin:'auto'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Products</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts}
                </tbody>
            </table>
        </div>
    )
}