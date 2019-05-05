import React, { Component } from 'react';
import { products } from './utils/data';
import { removeDuplicates } from './utils/helper';
import Header from './components/Header';
import Products from './components/ListProducts';

class App extends Component {
  state = {
    products: products,
    cart: {
      items: [],
      isOpen: false,      
      installments: 10,      
    },
  }

  subTotal = items => {
    if (items.length > 0) {
      return items.map((item) => item.price.value).reduce((acc, b) => acc + b)
    }
    return;
  }

  addCart = id => e => {
    e.preventDefault();
    let item = this.state.products.filter(product => product.id === id)[0];
    let qtd = item.qtd || 0;
    item.qtd = Number(qtd + 1);

    this.setState({
        cart: {
          ...this.state.cart, 
          items: [
            ...this.state.cart.items,
            item
          ]
        }
    });

  }

  removeCart = id => e => {
    e.preventDefault();
    
    this.resetQtd( id );
    let items = this.state.cart.items.filter( product => product.id !== id );
    this.setState({
      cart: {
        ...this.state.cart, 
        items
      }
    });
  }
  
  resetQtd = id => {
    let item = this.state.cart.items.filter(item => item.id === id).map(item => item.qtd = 0);
    
    this.setState({
      cart: {
        ...this.state.cart,
        items: [
          ...this.state.cart.items,
          item
        ]
      }
    })
  }

  toggleOpenCart = e => {
    e.preventDefault();

    this.setState({
      cart: {
        ...this.state.cart,
        isOpen: !this.state.cart.isOpen
      }
    });
  }

  render() {
    const { products, cart } = this.state;
    let subtotalValue = this.subTotal(cart.items);
    let cartNoDuplicate = removeDuplicates(cart.items, 'id');

    return (
      <div className="App">
        <Header
          urlLogo={ require('./logo.png' )}
          count={ cart.items.length } 
          toggleOpenCart={this.toggleOpenCart} 
          cart={ cart }
          cartNoDuplicate={ cartNoDuplicate }
          total={ subtotalValue }
          removeCart={ this.removeCart } 
        />
        { products && <Products products={products} addCart={this.addCart} /> }
      </div>
    );
  }
}

export default App;
