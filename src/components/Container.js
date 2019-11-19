import React, { Component } from "react";
import CrimeRecord from "./CrimeRecord.js"
import LikeCounter from "./LikeCounter.js"

export default class Container extends Component {
    render () {
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