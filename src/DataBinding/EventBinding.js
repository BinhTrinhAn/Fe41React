import React, { Component } from 'react'

export default class EventBinding extends Component {
    // cach 2
    handleClick = (name) => {
        alert(name)
    }
    render() {
        return (
            <div>
                {/* cach 1 */}
                {/* <button type="button" onClick={function () {
                    alert('show mess')
                }}  id="btnShowMessage" class="btn btn-primary">Show mes</button> */}
                {/* cach 2 */}
                {/* <button type="button" onClick={this.handleClick.bind(this, 'Binh')} id="btnShowMessage" class="btn btn-primary">Show mes</button> */}
                {/* cach 3 : prefer dung nhieu */}
                <button type="button" onClick={ () => {
                    alert('Hello world')
                }}  id="btnShowMessage" class="btn btn-primary">Show mes</button>
            </div>
        )
    }
}
