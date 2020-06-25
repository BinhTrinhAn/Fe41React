import React, { Component } from 'react'
import BTBestSeller from './BTBestSeller'
import BTProductItem from './BTProductItem'
import Productitems from '../../Props/Productitems';

export default class BTProductList extends Component {

    renderProduct = (dataProduct) => {
        let content = dataProduct.map((product, index) => {
            return <div className='col-3' key={index}>
                <BTProductItem productData={product} />
            </div>
        })
        return content
    }
    render() {
        let {products} = this.props;

        return (
            <div className='container-fluid'>
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        {this.renderProduct(products)}
                    </div>
                </section>
            </div>
        )
    }
}
