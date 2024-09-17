import React from "react";
import axios from "axios";
import withNavigation from './withNavigation';

import { useNavigate, useLocation, useParams } from 'react-router-dom'; 

class Wallpaper82 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            inputText: '',
            suggestion: []
        };
    }

    componentDidMount() {
        console.log(this.props.navigate); // Logs navigate function
    }


    handleLocation = (event) => {
        const location_id = event.target.value;

        axios({
            method: 'GET',
            url: `http://localhost:5000/getplace1/${location_id}`,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
    
            this.setState({
                restaurants: response.data.restaurants,
                suggestion: []
            });
        })
        .catch(err => console.log(err));
    }

    handleSearch = (event) => {
        let inputText = event.target.value;
        const { restaurants } = this.state;
        const suggestion = restaurants.filter(item => 
            item.name.toLowerCase().includes (inputText.toLowerCase())
        );
        this.setState({ suggestion, inputText });
    }

    showSuggestion = () => {
        const { suggestion, inputText } = this.state;

        if (suggestion.length === 0 && !inputText) {
            return null;
        }

        if (suggestion.length === 0 && inputText) {
            return <ul><li>No Search Found</li></ul>;
        }

        return (
            <ul>
                {suggestion.map((item, index) => (
                    <li key={index} onClick={() => this.SelectingRestaurant(item)}>
                        {`${item.name} - ${item.locality}, ${item.city}`}
                    </li>
                ))}
            </ul>
        );
    }

    

    SelectingRestaurant = (resObj) => {
        const { navigate } = this.props;

        if (navigate) {
            navigate(`/detail?restaurant=${resObj._id}`);
        } else {
            console.error('Navigate function is not defined');
        }
    }

    render() {
        const { locationsData } = this.props;
        console.log("loc",locationsData)

        return (
            <>
                <img src="./Assets/ResFront.jpg" className="mainImg" alt="Image not Found" />

                <div className="topSection">
                    <div className="logo">e!</div>
                    <div className="headerText">Find the Best Restaurant</div>

                    <div className="searchOption">
                        <span>
                            <select className="locationBox" onChange={this.handleLocation}>
                                <option>Select City</option>
                                {locationsData.map((item) => (
                                    <option key={item.location_id} value={item.location_id}>
                                        {`${item.name}, ${item.city}`}
                                    </option>
                                ))}
                            </select>
                        </span>
                       
                        <span className="serachBox">
                            <i className="bi bi-search searchIcon"></i>
                            <input type="text" className="searchInput" placeholder="Search Location" onChange={this.handleSearch} />
                            <div className="notebooks">
                            {this.showSuggestion()}
                            </div>
                        </span>
                      
                    </div>
                </div>
            </>
        );
    }
}
// export default Wallpaper82;
export default withNavigation(Wallpaper82);