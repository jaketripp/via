import React, { Component } from 'react';
import Card from './Card';
import { trips } from '../data/sampleTrip';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.address !== this.state.address) {
            this.setState({ address: nextProps.address });
        }
        if (nextProps.location !== this.state.location) {
            this.setState({ location: nextProps.location });
        }
    }

    render() {
        return (
            <div className="cards">
                {
                    trips.map((trip, i) => {
                        return (
                            <Card key={i} {...trip} userAddress={this.state.address} userLocation={this.state.location} />
                        )
                    })
                }
            </div>
        );
    }
}

export default CardList;
