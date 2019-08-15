import React from "react";
import data from "../data.js";

const { Consumer, Provider } = React.createContext();
const { profile, knowledge, experience } = data;

class ContentProvider extends React.Component {
  state = { profile, knowledge, experience };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { ContentProvider };
export default Consumer;
