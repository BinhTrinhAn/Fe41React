import React, { Component } from 'react'
import BT3Items from './BT3Items'
import data from '../../DATA/dataPhone.json'

export default class BT3List extends Component {
    dataPhone = data;
    renderPhone = () => {
        return this.dataPhone.map((product, index) => {
            return (
                <div className='col-4'>
                    <BT3Items phone={product} xemChitiet = {this.xemChitiet}/>
                </div>
            )
        })
    }
    state = {
        phoneDetail:{
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }

    // item = {
    //     "maSP": 1,
    //     "tenSP": "VinSmart Live",
    //     "manHinh": "AMOLED, 6.2, Full HD+",
    //     "heDieuHanh": "Android 9.0 (Pie)",
    //     "cameraTruoc": "20 MP",
    //     "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
    //     "ram": "4 GB",
    //     "rom": "64 GB",
    //     "giaBan": 5700000,
    //     "hinhAnh": "./img/vsphone.jpg"
    // }

    xemChitiet = (phone) => {
        this.setState({
            phoneDetail:phone
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Thong tin san pham</h3>
                <div className="row">
                    {this.renderPhone()}
                </div>
                <div className="row">
                    <div className='col-6'>
                        <img className="card-img-top" src={this.state.phoneDetail.hinhAnh} />
                    </div>
                    <div className='col-6'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>tenSP</th>
                                    <th>{this.state.phoneDetail.tenSP}</th>
                                </tr>
                                <tr>
                                    <th>manHinh</th>
                                    <th>{this.state.phoneDetail.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>heDieuHanh</th>
                                    <th>{this.state.phoneDetail.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>cameraTruoc</th>
                                    <th>{this.state.phoneDetail.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>cameraSau</th>
                                    <th>{this.state.phoneDetail.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ram</th>
                                    <th>{this.state.phoneDetail.ram}</th>
                                </tr>
                                <tr>
                                    <th>rom</th>
                                    <th>{this.state.phoneDetail.rom}</th>
                                </tr>
                                <tr>
                                    <th>giaBan</th>
                                    <th>{this.state.phoneDetail.giaBan}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
