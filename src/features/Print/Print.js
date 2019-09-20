import React from "react";
import styled from "styled-components";
import "./Style.css";

class Print extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector("html").classList.add("print");
    console.log(document.querySelector("html").classList);
  }

  render() {
    return <div>Print version</div>;
  }
}

export default Print;
