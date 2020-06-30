import React, { Component } from 'react'
import data from '../../data.json'
import BT2ProductItems from './BT2ProductItems';

export default class BT2ProductList extends Component {
    renderProduct = (dataProduct) => {
        let content = dataProduct.map((product, index) => {
            return <div className='col-3' key={index}>
                <BT2ProductItems item={product} />
            </div>
        })
        return content
    }
    render() {
        let dataList = data;
        return (
            <div>
                <div className="row">
                    {this.renderProduct(dataList)}
                </div>
                
            </div>
        )
    }
}
