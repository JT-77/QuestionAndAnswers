import React, { Component } from "react";
import "./App.css";

import QuestionBox from "./QuestionBox";

class FetchMonkApi extends Component {
  constructor() {
    super();

    this.state = {
      test: [],
    };
  }

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    fetch("https://recruitingmonk-v2.azurewebsites.net/qna")
      .then((results) => results.json())
      // console.log(res.data[0].question)

      .then((results) => this.setState({ test: results }));
    // .catch((error)=>{
    // console.log(error)
    // })
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.test.map(function (item, index) {
            return (
              <div className="components" key={item._id}>
            
                <QuestionBox data={item} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FetchMonkApi;
