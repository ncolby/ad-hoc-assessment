import React, {Fragment} from 'react'


class ProductItem extends React.Component {
    render() {
        const {product} = this.props
        return(
            <Fragment>
                <h1>{product.item}</h1>
                <p>Product Number: {product.productNumber}</p>
                <p>Price: {product.price}</p>
                <p>Id: {product.id}</p>
            </Fragment>
        )
    }
}

export default ProductItem;