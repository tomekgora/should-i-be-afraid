import React, { Component } from "react";

export default class CommentForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form...");
  }

  render() {
    return (
      <div className="add comment">
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="textarea" name="comment" />
          </label>
          <input type="submit" value="Sumbit your comment" />
        </form>
      </div>
    );
  }
}
