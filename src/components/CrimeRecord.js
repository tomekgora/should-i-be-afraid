import React, { Component } from "react";
import LikeCounter from "./LikeCounter.js";
import FavoriteButton from "./FavoriteButton.js";

export default class CrimeRecord extends Component {
  // state =  {
  //     loading: true
  //     articles:
  //     error:
  // }

  // https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01

  render() {
    return (
      <div className="crime-record">
        <p className="heading">Crime Record</p>
        <p>Category:</p>
        <p>Type:</p>
        <p></p>
        <p></p>

        <LikeCounter />
        <FavoriteButton />

        {/* Category:, location-type: category-image:
street.name, outcome_status: category: date: */}
      </div>
    );
  }
}
