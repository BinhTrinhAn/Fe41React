import React, { Component } from 'react'

export default class Productitems extends Component {
    render() {
        // lấy dữ liệu từ component cha và gán vào con bằng phương thức props
        // cách 1 theo ES5
        // let productData = this.props.productData;
        // cách 2 theo ES6
        // Thuộc tính prop không để gán lại dữ liệu
        let {productData,titleData} = this.props
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="https://specials-images.forbesimg.com/imageserve/1211127975/960x0.jpg?fit=scale" alt />
                    <div className="card-body">
                        <h4 className="card-title">{productData.name}</h4>
                        <p className="card-text">{productData.id}</p>
                        <p className="card-text">{titleData}</p>
                    </div>
                </div>
            </div>
        )
    }
}
