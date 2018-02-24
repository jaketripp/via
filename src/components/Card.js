import React, { Component } from 'react';
const Location = require('react-icons/lib/fa/location-arrow');
const Money = require('react-icons/lib/fa/money');
const Phone = require('react-icons/lib/fa/phone');
const Yelp = require('react-icons/lib/fa/yelp');
const Clock = require('react-icons/lib/io/clock');
// AIzaSyB7UW3p_y7Aw4fyEBmhN2xtA1vYPYJw7PI key
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userAddress !== this.state.userAddress) {
            this.setState({ userAddress: nextProps.userAddress });
        }
        if (nextProps.userLocation !== this.state.userLocation) {
            this.setState({ userLocation: nextProps.userLocation });
        }
    }

    busRouteURL = () => {
        return `https://tripplan.viainfo.net/#/app/tripplanning/itineraries/${this.state.userLocation.latitude}/${this.state.userLocation.longitude}/Start/${this.state.business.coordinates.latitude}/${this.state.business.coordinates.longitude}/${this.state.business.name}`;
    }

    render() {
        return (
            <div className="card">
                <div className="picture">
                    <div style={{ backgroundImage: `url(${this.state.business.imgURL})` }} alt={this.state.name}></div>
                </div>
                <div className="content">
                    <h3 className="content__name">{this.state.business.name}</h3>
                    <div className="short__info">
                        <p className="time"><Clock /> {this.state.minutes} mins</p>
                        <p className="amount"><Money /> ${this.state.cost}</p>
                        <p className="yelpURL"><a href={this.state.business.yelpURL} title="Yelp Link" target="_blank" rel="noopener"><Yelp /></a></p>
                    </div>
                    <p className="phone"><a href={`tel:${this.state.business.phoneNumber}`} title="phone number"><Phone /> {this.state.business.phoneNumber}</a></p>
                    <p className="link"><a href={this.busRouteURL()} target="_blank" rel="noopener" title="Bus routes"><Location /> Bus routes</a></p>
                </div>
            </div>
        );
    }
}

export default Card;
