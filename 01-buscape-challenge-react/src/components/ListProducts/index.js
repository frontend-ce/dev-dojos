import React from 'react';
import Product from '../Product';
import styles from './listproducts.module.css';

const Products = ({ products, addCart, removeCart, simple }) => (
    <ul className={ simple ? `${styles.products} ${styles.simple}`: `${styles.products}` }>
        {
            products.map(( product ) => (
                <li key={ product.id } className={ styles.item }>
                    <Product { ...product } simple={simple} addCart={addCart} removeCart={removeCart} />
                </li>
            ))
        }
    </ul>
);

export default Products