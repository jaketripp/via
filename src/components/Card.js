import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <div className="card">
                <div className="picture">
                    <img src={`/images/${this.state.imgURL}`} alt={this.state.name} />
                </div>
                <div className="content">
                    <h3 className="content__name">{this.state.name}</h3>
                    <p className="time">~30 minutes</p>
                    <p className="amount">~${this.state.amount}</p>
                    <a href="https://google.com" title="Bus routes">Bus routes</a>
                </div>
            </div>
        );
    }
}

export default Card;
