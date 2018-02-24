import React, { Component } from 'react';
const Location = require('react-icons/lib/fa/location-arrow');
const Money = require('react-icons/lib/fa/money');
const Clock = require('react-icons/lib/io/clock');

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        }
    }

    render() {
        return (
            <div className="card">
                <div className="picture">
                    <div style={{ backgroundImage: `url('/images/${this.state.business.imgURL}')`}} alt={this.state.name}></div>
                </div>
                <div className="content">
                    <h3 className="content__name">{this.state.business.name}</h3>
                    <p className="time"><Clock /> ~ {this.state.minutes} mins</p>
                    <p className="amount"><Money /> ~ ${this.state.amount}</p>
                    <p className="link"><a href="https://google.com" title="Bus routes"><Location /> Bus routes</a></p>
                </div>
            </div>
        );
    }
}

export default Card;
