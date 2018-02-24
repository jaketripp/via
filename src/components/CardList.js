import React, { Component } from 'react';
import Card from './Card';
import { trips } from '../data/sampleTrip';

class CardList extends Component {


    render() {
        return (
            <div className="cards">
                {
                    trips.map((trip, i) => {
                        return (
                            <Card key={i} {...trip} />
                        )
                    })
                }
            </div>
        );
    }
}

export default CardList;
