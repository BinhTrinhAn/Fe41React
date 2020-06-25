import React, { Component } from 'react'
import Productitems from './Productitems'
import ProductitemsRFC from './ProductitemsRFC'

export default class DemoProps extends Component {
    render() {
        let product = {
            id: 1,
            name: 'xxx',
            price: 1200
        }
        let title = 'ABC'
        return (
            <div className='container'>
                {/* Truyền tham số theo class */}
                <Productitems productData={product} titleData={title} />
                {/* truyền tham số theo rfc: function */}
                <ProductitemsRFC name = {product.name} />
            </div>
        )
    }
}
