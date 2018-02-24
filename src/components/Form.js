import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            location: '',
            address: '',
            start: '',
            end: '',
            useMyLocationEnabled: true,
            search: ''
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
    onCheckboxChange = (e) => {
        this.setState({ useMyLocationEnabled: !this.state.useMyLocationEnabled });
    }
    onStartTimeChange = (e) => {
        const start = e.target.value;
        this.setState({ start });
    }
    onEndTimeChange = (e) => {
        const end = e.target.value;
        this.setState({ end });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { amount, location, address, start, end, search } = this.state;
        
        if (amount && start && end && search) {
            if (location) {
                console.log(this.state);
            } else if (address) {
                console.log(this.state);
            }
        }
    }

    render() {
        return (
            <form className="Form" onSubmit={this.onSubmit}>

                <div className="form-field">
                    <label htmlFor="useMyLocation">Use my location</label>
                    <input
                        type="checkbox"
                        id="useMyLocation"
                        name="useMyLocation"
                        checked={this.state.useMyLocationEnabled}
                        onChange={this.onCheckboxChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        id="address"
                        name="address"
                        placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500"
                        value={this.state.address}
                        onChange={this.onAddressChange}
                        disabled={this.state.useMyLocationEnabled}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="amount">$</label>
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
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;



// </div>