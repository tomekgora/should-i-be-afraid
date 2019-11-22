import React, { Component } from "react";

export default class LikeCounter extends Component {
  state = {
    numLikes: 0
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Dislike</button>
        <p>
          This post has <b>{this.state.numLikes}</b> dislikes!
        </p>
      </div>
    );
  }
}
