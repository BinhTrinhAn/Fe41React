import React, { Component } from 'react'
import data from '../../DATA/dataPhone.json'
import BT3PhoneItems from './BT3PhoneItems'

export default class BT3Phone extends Component {
    dataPhone = data
    state = {
        phoneDetail: {
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
    xemChiTiet = (phone) => {
        this.setState({
            phoneDetail : phone
        })
    }

    renderPhone = () => {
        return this.dataPhone.map((product, index) => {
            return <div className='col-4'>
                <BT3PhoneItems item={product} xemChiTiet={this.xemChiTiet} thongBao={this.thongBao} />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3>Danh sach dien thoai</h3>
                <div className="row">
                    {this.renderPhone()}
                </div>
                <h3>Chi tiet san pham</h3>
                <div className="row">
                    <div className="col-6">
                        <p className="text-center">IPhone</p>
                        <img classname="card-img-top img-fluid" src={this.state.phoneDetail.hinhAnh} alt />
                    </div>
                    <div className="col-6">
                        <table className="table">
                            <tr>
                                <th>Man hinh</th>
                                <th>{this.state.phoneDetail.manHinh}</th>
                            </tr>
                            <tr>
                                <th>He dieu hanh</th>
                                <th>{this.state.phoneDetail.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Truoc</th>
                                <th>{this.state.phoneDetail.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{this.state.phoneDetail.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <th>{this.state.phoneDetail.ram}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{this.state.phoneDetail.rom}</th>
                            </tr>
                            <tr>
                                <th>Gia ban</th>
                                <th>{this.state.phoneDetail.giaBan}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
