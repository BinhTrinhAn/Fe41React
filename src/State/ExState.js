import React, { Component } from 'react'

export default class ExState extends Component {
    state = {
        likeNum : 0 // gia tri thay đổi trên giao diện
    }
    // ham  xử lý tăng lượt like
    like = () => {
        let likeNow = this.state.likeNum + 1;
        this.setState({
            likeNum: likeNow,
        })
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <h3 classname="display-4"> LE THI AN</h3>
                    <div className="card text-white bg-dark" style={{ width: 250}} >
                        <img className="card-img-top" src="https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg" style={{ width: 250, height: 200 }} />
                        <div className="card-body">
                            <h4 className="card-title">Ho ten: Le thi An</h4>
                            <p className="card-text">Tuoi: 28</p>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="card text-white bg-dark" style={{ width: 250, height: 170 }} >
                        <div className="card-body">
                            <h4 className="card-title">Luot thich {this.state.likeNum} <i className="fa fa-heart" aria-hidden="true" /></h4>
                            <button type="button" onClick = {
                                () => {
                                    this.like();
                                }
                            } className="btn btn-danger">Tha tim <i className="fa fa-heart" aria-hidden="true" /></button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
