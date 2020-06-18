import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTProductList from './BTProductList'
import BTBestSeller from './BTBestSeller'
import BTPromotion from './BTPromotion'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader></BTHeader>
                <BTSlider></BTSlider>
                <BTProductList></BTProductList>
                <BTBestSeller></BTBestSeller>
                <BTPromotion></BTPromotion>
            </div>
        )
    }
}
