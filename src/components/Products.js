import React from 'react'
import ProductItem from './ProductItem'

class Products extends React.Component {
    render() {

        const {products} = this.props
        return(
        <div>
            {products.map(product => (
                <ProductItem
                product={product}
                key={product.id}
                />
                ))}
        </div>
        )
    }
}

export default Products