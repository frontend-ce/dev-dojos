import React, { Fragment } from 'react'
import Cart from '../Cart';
import { IconMenu } from '../Icons'
import styles from './header.module.css'

const Header = ({ urlLogo, count, cart, cartNoDuplicate, total, removeCart, toggleOpenCart }) => (
    <Fragment>
        <header className={styles.header}>
            <div className={styles.row}>
                <img src={urlLogo} alt="logo" className={styles.logo} />

                <button onClick={toggleOpenCart} className={styles.menu}>
                    <IconMenu />
                    <span className={styles.count}>{ count } </span>
                </button>
            </div>

            { cart.isOpen && 
                <Cart 
                    {...cart} 
                    cartNoDuplicate={cartNoDuplicate} 
                    total={total} 
                    removeCart={removeCart} 
                /> 
            }
        </header>
    </Fragment>
)

export default Header;