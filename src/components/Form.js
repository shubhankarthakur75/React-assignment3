import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    employee: [],
    name: "",
    department: "",
    rating: "",
  };
  submitForm = () => {
    let d = new Date();
    this.props.submitHandler(
      d.getTime(),
      this.state.name,
      this.state.department,
      this.state.rating
    );
    this.setState({ name: "", department: "", rating: "" });
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
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
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="emp-department">Department</label>
            <input
              type="text"
              id="department"
              value={this.state.department}
              onChange={(e) => this.handleChange(e)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="emp-rating">Rating</label>
            <input
              type="number"
              id="rating"
              value={this.state.rating}
              onChange={(e) => this.handleChange(e)}
              required
            ></input>
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
