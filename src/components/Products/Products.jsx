import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: "CLASSIC SHREDDING PROGRAM", description: "6 DAY TRAINING PROGRAM", price: "$25.00", image:'https://images4.alphacoders.com/805/805233.jpg'},
    { id: 2, name: "ELITE ATHLETE PROGRAM", description: "5 DAY TRAINING PROGRAM", price: "$25.00", image:'https://i.pinimg.com/564x/7a/11/b9/7a11b9f739c130eed437d1a237cc3b7d.jpg'}

];

const Products = () => {
    return (
       <main>
           <Grid container justify="center" spacing={4}>
               {products.map((product) => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/>
                   </Grid>
               ))}
           </Grid>
       </main>
    );
}

export default Products;