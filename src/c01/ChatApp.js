import React from "react";
import withTimer from "../c06/withTimer";

class MessageList extends React.Component {
  render() {
    return <ul>{this.props.messages.map(msg => <li>{msg}</li>)}</ul>;
  }
}

class ChatApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputMsg: "",
    };
  }
  
  /*state = {
    messages: [],
    inputMsg: "",
  };*/
  
  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.value,
    });
  };
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: "",
      });
    }
  };
  
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <div>
          <from>
            <input type="text" name="firstname" value="Mickey" onChange={(e)=>this.handleInput(e)}/>
            <input type="text" name="lastname" value="Mouse"/>
            <input value={this.state.inputMsg} onChange={(e)=>this.handleInput(e)}/>
            <input type="submit" value="Submit"/>
          </from>
          <button onClick={this.handleSend}>Send</button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default withTimer(ChatApp);

// export default timer;
