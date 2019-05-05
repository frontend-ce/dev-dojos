import React from 'react';
import { formatReal } from '../../utils/helper';
import Products from '../ListProducts';
import styles from './cart.module.css';

const Cart = ({ cartNoDuplicate, total, installments, removeCart }) => {
    let totalValue = total || 0;   
    let installmentsValue = (totalValue/installments);

    return (
        <div className={ styles.cart }>
            { cartNoDuplicate.length > 0 && <Products products={ cartNoDuplicate } simple={true} removeCart={removeCart} />}
            { 
                totalValue !== 0 && 
                (<div className={ styles.subtotal }>
                    <strong className={ styles.title }>subtotal</strong>
                    <p>{ installments }x R$ { formatReal(installmentsValue) }</p>
                    <p>ou R$ { formatReal(totalValue) } à vista</p>            
                </div>)
            }
        </div>
    )
};

export default Cart;