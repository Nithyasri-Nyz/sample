import React from "react";
import "../Styles/Home.css"

import Wallpaper82 from "./Wallpaper82";
import Quicksearch82 from "./Quicksearch82";
import Header84 from "./Header84";
import axios from "axios";
// import { response } from "express";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            location: [],
            mealtype:[],
            error: null,
        };
    }

    componentDidMount() {
        // location
        axios({
            method: "GET",
            url: 'http://localhost:5000/getLocations',
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            this.setState({ location: response.data.locations });
        })
        .catch(err => {
            this.setState({ error: 'Failed to fetch locations' });
            console.error(err);
        });

        // Mealtype
        axios({
            method: "GET",
            url: 'http://localhost:5000/getmealtype',
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            this.setState({ mealtype: response.data.Mealtype });
        })
        .catch(err => {
            this.setState({ error: 'Failed to fetch Mealtypes' });
            console.error(err);
        });
    }

    render() {
        const { location,mealtype }=this.state;
        console.log("hello",location)
        return (

            <>
                <Header84/>
                <Wallpaper82 locationsData={location}/>
                <Quicksearch82 quicksearchData={mealtype}/>

            </>

        )
    }
}
export default Home;

