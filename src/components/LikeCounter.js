import React, { Component } from "react";

export default class LikeCounter extends Component {
  state = {
    numLikes: 0
  };

  render() {
    return (
      <div>
        <p>This post has <b>{ this.state.numLikes }</b> likes!</p>
      </div>
    );
  }
}