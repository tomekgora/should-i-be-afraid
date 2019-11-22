import React, { Component } from "react";

export default class FavoriteButton extends Component {
  state = {
    numFav: 0
  };

  increment = () => {
    this.setState({
      numFav: this.state.numFav + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>My Favorite</button>
        <p>
          This post has been saved to favorite <b>{this.state.numFav}</b> times!
        </p>
      </div>
    );
  }
}
