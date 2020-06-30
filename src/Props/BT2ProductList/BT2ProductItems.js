import React, { Component } from 'react'

export default class BT2ProductItems extends Component {
    
    render() {
        let {item} = this.props
        return (
            <div className='container'>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={item.image} alt />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.alias}</p>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">{item.shortDescription}</p>
                        <p className="card-text">quantity : {item.quantity}</p>
                        <p className="card-text">price : {item.price}</p>
                    </div>
                </div>

            </div>
        )
    }
}
