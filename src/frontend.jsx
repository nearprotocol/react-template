import React, { Component } from "react";
import "./frontend.css";

export default class TokensApp extends Component {
  constructor() {
    super();
    this.state = {
      helloMessage: ""
    }
  }

  componentWillMount() {
    this.props.contract.hello().then(res => {
      this.setState({
        helloMessage: res
      })
    })
  }
  
  render() {
    return (
      <div>
        <p>We're cooking!</p>
        <p>React also says {this.state.helloMessage}</p>
      </div>
    )
  }
}