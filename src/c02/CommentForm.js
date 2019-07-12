import React, { PureComponent } from "react";
import PropTypes from "prop-types";

function getStyle() {
  return {display: "block", width: "100%"};
}

export default class CommentForm extends PureComponent {
  static propTypes = {
    comments: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className="comment-form">
        <form onSubmit={evt => evt.preventDefault()}>
          <textarea style={getStyle()} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
