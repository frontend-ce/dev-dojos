import React from 'react'
import { formatReal } from '../../utils/helper'
import Gallery from '../Gallery'
import { IconHeart } from '../Icons'
import styles from './product.module.css'

const Product = ({ id, name, price, images, addCart, removeCart, qtd, simple }) => (
    <article className={simple ? `${styles.product} ${styles.simple}`: styles.product}>
        { simple ? (
            <figure><img src={images[0]} alt='' /></figure>
        ) : (
            <Gallery images={images} thumbImage={ images[0] } /> 
        )}

        <div className={styles.infos}>
            <h2 className={styles.title}>
                { name }
                {!simple && <button className={ styles.favorite }><IconHeart /></button>}
            </h2>

            <div className={ styles.wrapActions }>
                <div className="wrap-price">
                    <p className={ styles.priceTitle }>
                        <small>{price.installments}x</small> <small>R$ </small>{ formatReal(price.installmentValue) }
                    </p>
                    <p className={ styles.priceSubtitle }>ou <b>R$ {formatReal(price.value)}</b> à vista</p>
                </div>
                { (qtd && simple) ? (<strong>qtd: <span>{ qtd }</span></strong>) : '' }
                { addCart && <button className={ styles.btnAdd } onClick={addCart(id)}>Adicionar ao carrinho</button>}
                { removeCart && <button className={ styles.btnRemove } onClick={removeCart(id)}>&times;</button>}        
            </div>
        </div>
    </article>
);

export default Product;