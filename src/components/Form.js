import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  submitForm = () => {
    let employeeName = document.getElementById("emp-name");
    let employeeDepartment = document.getElementById("emp-department");
    let employeeRating = document.getElementById("emp-rating");
    this.props.submitHandler(
      employeeName.value,
      employeeDepartment.value,
      employeeRating.value
    );
    employeeName.value = "";
    employeeDepartment.value = "";
    employeeRating.value = "";
  };
  render() {
    return (
      <div className="form-container">
        <form
          className="feedback-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.submitForm();
          }}
        >
          <div>
            <label htmlFor="emp-name">Name</label>
            <input type="text" id="emp-name" required></input>
          </div>
          <div>
            <label htmlFor="emp-department">Department</label>
            <input type="text" id="emp-department" required></input>
          </div>
          <div>
            <label htmlFor="emp-rating">Rating</label>
            <input type="number" id="emp-rating" required></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div></div>
        </form>
      </div>
    );
  }
}

export default Form;
