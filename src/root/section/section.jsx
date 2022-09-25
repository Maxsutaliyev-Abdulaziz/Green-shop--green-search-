import React, { Component } from "react";
import '../../style.css'

class Section extends Component {
    render() {
        return (
            <div className="box">
                <div>
                    <div className="img-box">
                        <img className="img" src={this.props.img} alt="" />
                    </div>
                    <h1 className="name">{this.props.name}</h1>
                    <div className="sum">
                    <h1 className="narx">${this.props.narx} </h1>
                    <h1 className="status">{this.props.status}</h1>
                    </div>
                </div>
            </div>
        )
    }
}



export default Section;
