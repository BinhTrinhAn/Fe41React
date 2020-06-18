import React, { Component } from 'react'

export default class DataBinding extends Component {
    hocVien = {
        ho: "Trinh",
        ten: 'An',
        hinhAnh: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png'
    }

    renderImg() {
        return <img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png' />
    }
    render() {
        // tạo biến trong react  như js
        let title = 'hello fe 41';
        return (
            <div>
                <div className='container'>
                    <h1>{this.hocVien.ho}</h1>
                    <h1>{this.hocVien.ten}</h1>
                    <img src={this.hocVien.hinhAnh}/>
                </div>
                {/* dom tromg react */}
                <h1>{title}</h1>
                <input value={title} />
                {this.renderImg()}
            </div>
        )
    }
}
