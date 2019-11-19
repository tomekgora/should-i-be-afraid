import React, { Component } from "react";
import LikeCounter from "./LIkeCounter.js"

export default class CrimeRecord extends Component {
    render () {
        return <div className ="crime-record">
            <LikeCounter/>

{/* Category:, location-type: category-image:
street.name, outcome_status: category: date: */}
        </div>
      
    }
}