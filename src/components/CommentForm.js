import React, { Component } from "react";
import "./CommentForm.css";

export default class CommentForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form...");
  }

  render() {
    return (
      <div className="add-comment">
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="textarea" className="input-box" name="comment" />
          </label>

          <input
            type="submit"
            className="submitbutton"
            value="Sumbit your comment"
          />
        </form>
      </div>
    );
  }
}
