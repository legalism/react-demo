import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class AdvancedTabSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.func
  };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {},
    children: () => {}
  };

  render() {
    const { options, value, onChange } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === this.props.value ? "selected" : ""
              }`}
              onClick={() => this.props.onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
        <br />
        <br />
        {this.props.value && this.props.children(this.props.value)}
      </div>
    );
  }
}

const colors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

const greatMaster = [
  { name: "鬼谷子", value: "guiguzi" },
  { name: "墨子", value: "mo-tse" },
  { name: "卫鞅", value: "weiyang" }
];

export class AdvancedTabSelectorSample extends PureComponent {
  state = {
    color: null
  };
  render() {
    return (
      <div>
        <h3>Select color: </h3>
        <AdvancedTabSelector
          options={colors}
          value={this.state.color}
          onChange={c => this.setState({ color: c })}
        >
          {color => (
            <span
              style={{
                display: "inline-block",
                backgroundColor: color,
                width: "400px",
                height: "400px"
              }}
            />
          )}
        </AdvancedTabSelector>
        <br />
        <br />
        <br />
        <h3>Select animal: </h3>
        <AdvancedTabSelector
          options={greatMaster}
          value={this.state.animal}
          onChange={c => this.setState({ animal: c })}
        >
          {master => (
            <img width="100px" src={require(`../images/${master}.jpg`)} />
          )}
        </AdvancedTabSelector>
      </div>
    );
  }
}
