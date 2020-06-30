import React, { Component } from 'react'

export default class BT3Items extends Component {
    
    render() {
        let {phone,xemChitiet} = this.props
        return (
            <div>
                <div className="card border-secondary">
                    <img className="card-img-top" src={phone.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phone.tenSP}</h4>
                        <p className="card-text">{phone.giaBan}</p>
                        <button type="button" onClick = {
                            () => {
                                {xemChitiet(phone)}
                            }
                        } class="btn btn-primary">Chi Tiet</button>
                    </div>
                </div>
            </div>
        )
    }
}
