import React, { Component } from 'react'

export default class BT3PhoneItems extends Component {
    render() {
        let { item,xemChiTiet, thongBao } = this.props
        return (
            <div>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={item.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <button type="button" onClick={()=>{
                            xemChiTiet(item);
                        }}  className="btn btn-primary">Xem chi tiet</button>
                    </div>
                </div>
            </div>
        )
    }
}
