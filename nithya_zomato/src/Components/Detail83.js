import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import Header84 from './Header84';
import "../Styles/Detail.css";

class Detail83 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'overview',
            restaurant: null,
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        const { search } = window.location;
        const qs = queryString.parse(search);
        const restaurantId = qs.restaurant;

        if (restaurantId) {
            axios({
                method: 'GET',
                url: `http://localhost:5000/getrestaurantId/${restaurantId}`,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                this.setState({ restaurant: response.data, isLoading: false });
            })
            .catch(err => {
                console.error('Failed to load restaurant data:', err);
                this.setState({ error: 'Failed to load restaurant data', isLoading: false });
            });
        } else {
            this.setState({ error: 'No restaurant ID provided in query string', isLoading: false });
        }
    }

    openTab = (tabName) => {
        this.setState({ activeTab: tabName });
    }

    render() {
        const { activeTab, restaurant, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        if (!restaurant) {
            return <div>Restaurant not found or failed to load data.</div>;
        }

        return (
            <div>
                <Header84 />
                <div className="image-Annam">
                    <img src={restaurant.image} alt="Restaurant" className="Annam-background-image" />
                    <button className="Detail-btns">Click to see Image Gallery</button>
                </div>
                <div className="Annam-Title">
                    <h1>{restaurant.name}</h1>
                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => this.openTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
                            onClick={() => this.openTab('contact')}
                        >
                            Contact
                        </button>
                    </div>
                    <div className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`} id="overview">
                        <h2>About This Place</h2>
                        <p><strong>Cuisine:</strong> {restaurant.cuisine.map(c => c.name).join(', ')}</p>
                        <p><strong>Average Cost:</strong> ₹{restaurant.min_price} for two people (approx.)</p>
                        <button className="order-btn">Place Online Order</button>
                    </div>
                    <div className={`tab-content ${activeTab === 'contact' ? 'active' : ''}`} id="contact">
                        <h2>Contact Information</h2>
                        <p><strong>Address:</strong> {restaurant.locality}, {restaurant.city}</p>
                        <p><strong>Phone:</strong> {restaurant.contact_number}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail83;
