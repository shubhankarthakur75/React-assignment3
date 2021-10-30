import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import FeedbackDisplay from "./components/FeedbackDisplay";

class App extends Component {
  state = {
    employee: [],
    display: "form",
  };

  getFeedback = (name, department, rating) => {
    const temp = [...this.state.employee];
    const newEmployee = {
      id: this.state.employee.length,
      name,
      department,
      rating,
    };
    temp.push(newEmployee);
    this.setState({ employee: temp, display: "feedback" });
  };

  displayComponent = (component) => {
    this.setState({ display: component });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>

        {this.state.display === "form" ? (
          <h1>EMPLOYEE FEEDBACK FORM</h1>
        ) : this.state.display === "feedback" ? (
          <h1>EMPLOYEE FEEDBACK DATA</h1>
        ) : null}
        {this.state.display === "form" ? (
          <Form submitHandler={this.getFeedback} />
        ) : (
          <FeedbackDisplay
            employeeList={this.state.employee}
            displayComponent={this.displayComponent}
          />
        )}
      </div>
    );
  }
}

export default App;
