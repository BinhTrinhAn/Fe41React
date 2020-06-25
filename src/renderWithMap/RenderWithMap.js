import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    products = [
        { id: 1, name: 'x', price: 100 },
        { id: 2, name: 'xx', price: 200 },
        { id: 3, name: 'xxx', price: 300 },
    ]
    // cach 1
    // renderProduct = () => {
    //     let contentJSX = [];
    //     for (let index = 0; index < this.products.length; index++) {
    //         let product = this.products[index];
    //         let tagTrJSX = <tr> 
    //             <td>{product.id}</td>
    //             <td>{product.name}</td>
    //             <td>{product.price}</td>
    //         </tr>
    //         contentJSX.push(tagTrJSX)
    //         console.log(tagTrJSX)
    //     }
    //     return contentJSX
    // }
    // cach 2 dung map
    renderProduct = () => {
            let contentJSX = this.products.map(
                (product,index) => {
                    return <tr key={index}> 
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                }
            );
            return contentJSX
        }

    render() {
        return (
            <div>
                <div className="container">
                    <h3>Danh sach san pham</h3><h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProduct()}
                            </tbody>
                        </table>
                    </h3>
                </div>
            </div>
        )
    }
}
