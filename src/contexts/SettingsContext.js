import React from "react";
import ReactResizeDetector from "react-resize-detector";

const { Provider, Consumer } = React.createContext();

class SettingsProvider extends React.Component {
  state = {
    widthClass: null
  };

  onResize = width => {
    const widthClass = this.getWidthClass(width);
    this.setState(state => ({ ...state, widthClass }));
  };

  getWidthClass = width => {
    if (width < 480) {
      return 0;
    } else if (width < 768) {
      return 1;
    } else if (width < 1024) {
      return 2;
    } else if (width >= 1024) {
      return 3;
    }
  };

  render() {
    return (
      <ReactResizeDetector
        handleWidth
        onResize={this.onResize}
        querySelector="#root"
      >
        <Provider value={this.state}>{this.props.children}</Provider>
      </ReactResizeDetector>
    );
  }
}

export { SettingsProvider };
export default Consumer;
