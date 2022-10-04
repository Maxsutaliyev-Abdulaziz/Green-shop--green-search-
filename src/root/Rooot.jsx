import React, { Component } from "react";
import data from "../mock/data";
import Section from "./section/section";
import '../style.css'
import img111 from '../mock/img/img111.png'
import search from '../mock/img/search.png'

class Rooot extends Component {
    state = {
        list: data,
        sum: 0,
    };
    render() {
        const onNameFilter = ({ target: { value } }) => {
            let res = data.filter((vl) => vl.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            this.setState({ list: res });
        };
        const onMaxNarx = ({ target: { value } }) => {
            this.setState.maxsum = value;
            console.log(value);
            console.log(this.state.maxsum);
        };
        const onMinNarx = ({ target: { value } }) => {
            this.setState.minsum = value;
            console.log(value);
            console.log(this.state.minsum);
        };

        const onNarxFiltr = ({ target: { value } }) => {
            let res = data.filter(
                (vl) => vl.narx <= this.state.maxsum
            ); res = data.filter(
                (vl) => this.state.minsum <= vl.narx
            );
            console.log(this.sum);

            this.setState({ list: res });
        };
        const onNamepriz = ({ target: { value } }) => {
            let res = data.filter(
                (vl) => vl.status > ""
            );
            this.setState({ list: res });
        };
        const onNamePriz = ({ target: { value } }) => {
            let res = data.filter(
                (vl) => vl.status !== 0
            );
            this.setState({ list: res });
        };
        return (
            <div>
                <div className="green"></div>
                <div className="main-filter">
                    <div className="maa">
                        <h1 className="gsh">GreenShop</h1>
                        <button onClick={onNamepriz} onDoubleClick={onNamePriz} className="priz"><img width={90} src={img111} alt="" /></button>
                        <div className="filter-box">
                            <input className="input input-filter" onChange={onNameFilter}  type="text" />
                        </div>
                        <div className="money-box">
                            <div className="m-box">
                                <div className="int">
                                    <div className="mm">
                                        <input className="input sum-input" onChange={onMinNarx} placeholder="Min" type="text" />
                                        <button className="icon" >$</button>
                                    </div>
                                    <div className="mm">
                                        <input className="input sum-input" onChange={onMaxNarx} placeholder="Max" type="text" />
                                        <button className="icon" >$</button>
                                    </div>

                                </div>
                                <button onClick={onNarxFiltr} onDoubleClick={onNamePriz} className="prizz"><img width={30} src={search} alt="" /></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="big-box">
                    {this.state.list.map((value) => (
                        <Section img={value.img} narx={value.narx} name={value.name} status={value.status} />
                    ))}
                </div>
            </div >
        )
    }
}

export default Rooot;
