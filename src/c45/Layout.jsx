import React, {Component} from 'react';
import styles from "./layout.scss"

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="layout">
        <div className="head">
          <p style={sty}>i am header</p>
        </div>
        <span> hello css</span>
      </div>);
  }
  
}

export default Layout;

const sty = {
  color: "#ff0000"
};