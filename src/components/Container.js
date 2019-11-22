import React, { Component } from "react";
import CrimeRecord from "./CrimeRecord.js"
import LikeCounter from "./LikeCounter.js"

export default class Container extends Component {
   
    state = {
        loading: true
    }

    componentDidMount() {
        return fetch("https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01")
        .then(res => res.json())
        .then(data => {
            // return <div>(Render stuff inside here)</div>;
            // setState()
        })
    }

    render () {
        // if we dont have data display loading

        // if we have data display the data (this.state.records.map)
        return <div className="container">
            <h1>SHOULD YOU BE AFRAID?</h1>
            <button>Click to find out</button>
            <CrimeRecord/>
            <CrimeRecord/>
            <CrimeRecord/>
            <CrimeRecord/>
            <CrimeRecord/>
            <CrimeRecord/>
            <CrimeRecord/>

            </div>
    }
}