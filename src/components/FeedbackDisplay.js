import React, { Component } from "react";
import "./FeedbackDisplay.css";

class FeedbackDisplay extends Component {
  render() {
    return (
      <div className="feedback-display">
        <div className="feedback-container">
          {this.props.employeeList.map((item) => {
            return (
              <div className="feedback" key={item.id}>
                Name:{item.name} | Department:{item.department} | Rating:
                {item.rating}
              </div>
            );
          })}
        </div>
        <div className="go-back-btn-container">
          <button
            onClick={() => this.props.displayComponent("form")}
            className="go-back-btn"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }
}

export default FeedbackDisplay;
