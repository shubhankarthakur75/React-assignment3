import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import FeedbackDisplay from "./components/FeedbackDisplay";

class App extends Component {
  state = {
    employeeArray: [],
    display: "form",
  };

  getFeedback = (id, name, department, rating) => {
    const temp = [...this.state.employeeArray];
    const newEmployee = {
      id,
      name,
      department,
      rating,
    };
    temp.push(newEmployee);
    this.setState({ employeeArray: temp, display: "feedback" });
  };

  displayComponent = (component) => {
    this.setState({ display: component });
  };

  render() {
    return (
      <div className="App">
        {this.state.display === "form" ? (
          <h1>EMPLOYEE FEEDBACK FORM</h1>
        ) : this.state.display === "feedback" ? (
          <h1>EMPLOYEE FEEDBACK DATA</h1>
        ) : null}

        {this.state.display === "form" ? (
          <Form submitHandler={this.getFeedback} />
        ) : (
          <FeedbackDisplay
            employeeList={this.state.employeeArray}
            displayComponent={this.displayComponent}
          />
        )}
      </div>
    );
  }
}

export default App;
