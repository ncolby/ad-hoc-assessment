import React from 'react'
import './App.css';
import Products from './components/Products'

class App extends React.Component{
  
  state = {
    products: [
    {
      item: 'book',
      productNumber: 14,
      id: 1,
      price: 10
    },

    {
      item: 'food',
      productNumber: 10,
      id: 2,
      price: 15
    },

    {
      item: 'toy',
      productNumber: 5,
      id: 3,
      price: 20
    },

    {
      item: 'paper',
      productNumber: 29,
      id: 4,
      price: 5
    }
  ],
    loading: false
  }

  render() {
    const {products} = this.state
    return (
      <div className="App">
        <Products products={products}/>
      </div>
    );
  }

}

  // {/* 
  //  Create state for 
  //  products: which is going to be an array -
  //  each item should have a name of the item, a product number, an id, and a price.
  
  //  loading: which is going to be a boolean on if the component is loading or not
  
  //  - Create a component for Products, loop through the Products, and output the list in 
  //  another component called ProductItems
  // */}0

export default App;
