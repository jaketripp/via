import React, { Component } from 'react';
import moment from 'moment';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            location: '',
            address: '',
            start: moment().format('hh:mm'),
            end: moment().add(2, 'hours').format('hh:mm'),
            useMyLocationEnabled: true,
            search: '',
            error: 'Missing form fields.',
        }
        // if address is entered, use address
        // otherwise use location

        this.getLocation();
    }

    getLocation() {
        // disable useMyLocation checkbox and set location state to ''
        const geo_error = () => {
            this.setState({ location: '', useMyLocationEnabled: false });
            return '';
        }
        // return cords
        const geo_success = (position) => {
            this.setState({
                location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
        }

        if ("geolocation" in navigator) {
            return navigator.geolocation.getCurrentPosition(geo_success, geo_error);
            // geolocator not available
            // disable useMyLocation checkbox and set location state to ''
        } else {
            this.setState({ location: '', useMyLocationEnabled: false });
        }
    }

    onCheckboxChange = (e) => {
        this.setState({ useMyLocationEnabled: !this.state.useMyLocationEnabled });
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState({ address });
    }
    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState({ search });
    }
    onStartTimeChange = (e) => {
        const start = e.target.value;
        this.setState({ start });
    }
    onEndTimeChange = (e) => {
        const end = e.target.value;
        this.setState({ end });
    }

    showError = () => {
        alert(this.state.error);
    }

    relevantState = ({ amount, location, address, start, end, useMyLocationEnabled, search }) => {
        return { amount, location, address, start, end, useMyLocationEnabled, search };
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { amount, location, address, start, end, search } = this.state;

        if (amount && start && end && search) {
            if (location) {
                console.log(this.relevantState(this.state));
            } else if (address) {
                console.log(this.relevantState(this.state));
            } else {
                this.setState({ error: 'Missing form fields. ' });
                this.showError();
            }
        } else {
            this.setState({ error: 'Missing form fields.' });
            this.showError();
        }
    }

    render() {
        return (
            <form className="Form" onSubmit={this.onSubmit}>

                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="1600 Pennsylvania Ave"
                        value={this.state.address}
                        onChange={this.onAddressChange}
                        disabled={this.state.useMyLocationEnabled}
                    />
                    <div id="checkboxField">
                        <input
                            type="checkbox"
                            id="useMyLocation"
                            name="useMyLocation"
                            checked={this.state.useMyLocationEnabled}
                            onChange={this.onCheckboxChange}
                            disabled={this.state.address}
                        />
                        <label htmlFor="useMyLocation">Use my location</label>
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="amount">Amount ($)</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="20"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="start">Start time</label>
                    <input
                        type="time"
                        id="start"
                        name="start"
                        value={this.state.start}
                        onChange={this.onStartTimeChange}
                    />
                    <label htmlFor="end">End time</label>
                    <input
                        type="time"
                        id="end"
                        name="end"
                        value={this.state.end}
                        onChange={this.onEndTimeChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="search">Search</label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="hamburger, movie, tacos, etc ..."
                        value={this.state.search}
                        onChange={this.onSearchChange}
                    />
                </div>

                <div className="form-field">
                    <button className="button">Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;