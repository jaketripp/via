import React, { Component } from "react";
const Location = require("react-icons/lib/fa/location-arrow");
const Money = require("react-icons/lib/fa/money");
const Phone = require("react-icons/lib/fa/phone");
const Yelp = require("react-icons/lib/fa/yelp");
const Star = require("react-icons/lib/fa/star");
const StarHalf = require("react-icons/lib/fa/star-half-empty");
const StarEmpty = require("react-icons/lib/fa/star-o");
const Clock = require("react-icons/lib/io/clock");
// AIzaSyB7UW3p_y7Aw4fyEBmhN2xtA1vYPYJw7PI key
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
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
    return `https://tripplan.viainfo.net/#/app/tripplanning/itineraries/${
      this.state.userLocation.latitude
    }/${this.state.userLocation.longitude}/Start/${
      this.state.business.coordinates.latitude
    }/${this.state.business.coordinates.longitude}/${this.state.business.name}`;
  };
  // takes in a number from 0-4 and returns stars
  ratingToStars = rating => {
    let starArray = [];
    rating = Number(rating);
    // build array
    for (let i = 0; i < 5; i++) {
      if (rating - 1 >= 0) {
        starArray.push(1);
        rating--;
      } else if (rating - 0.5 >= 0) {
        starArray.push(0.5);
        rating -= 0.5;
      } else {
        starArray.push(0);
      }
    }
    // return according stars
    return starArray.map((starType, i) => {
      if (starType === 1) {
        return <Star key={i} />;
      } else if (starType === 0.5) {
        return <StarHalf key={i} />;
      } else if (starType === 0) {
        return <StarEmpty key={i} />;
      } else {
        return "";
      }
    });
  };

  render() {
    return (
      <div className="card">
        <div className="picture">
          {this.state.business.imgURL && (
            <div
              style={{ backgroundImage: `url(${this.state.business.imgURL})` }}
              title={this.state.business.name}
            />
          )}
          {!this.state.business.imgURL && (
            <div
              style={{
                backgroundImage: "url(http://via.placeholder.com/320x320)"
              }}
              title={this.state.business.name}
            />
          )}
        </div>
        <div className="content">
          <h3 className="content__name">{this.state.business.name}</h3>
          <div className="short__info">
            {this.state.minutes > 0 && (
              <p className="time">
                <Clock /> {this.state.minutes} mins
              </p>
            )}
            <p className="amount">
              <Money /> {this.state.cost}
            </p>
          </div>
          <div className="short__info">
            <p className="yelpURL">
              <a
                href={this.state.business.yelpURL}
                title="Yelp Link"
                target="_blank"
                rel="noopener"
              >
                <Yelp />
              </a>
            </p>
            <p className="stars">
              {this.ratingToStars(this.state.business.rating)}
            </p>
          </div>
          {this.state.business.phoneNumber && (
            <p className="phone">
              <a
                href={`tel:${this.state.business.phoneNumber}`}
                title="phone number"
              >
                <Phone /> {this.state.business.phoneNumber}
              </a>
            </p>
          )}
          <p className="link">
            <a
              href={this.busRouteURL()}
              target="_blank"
              rel="noopener"
              title="Bus routes"
            >
              <Location /> Bus routes
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
