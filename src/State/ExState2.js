import React, { Component } from 'react'

export default class ExState2 extends Component {
    state = {
        imgSrc: './car/products/red-car.jpg',
    }

    changeImg = (src) => {
        this.setState({
            imgSrc: src,
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={this.state.imgSrc} style= {{ width:'100%' }}/>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4">
                                    <button type="button" onClick = {
                                        () => {
                                            this.changeImg('./car/products/red-car.jpg');
                                        }
                                    } className="btn btn-primary">RED</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" onClick = {
                                        () => {
                                            this.changeImg('./car/products/silver-car.jpg');
                                        }
                                    }  className="btn btn-danger">Silver</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" onClick = {
                                        () => {
                                            this.changeImg('./car/products/black-car.jpg');
                                        }
                                    } className="btn btn-warning">Black</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
