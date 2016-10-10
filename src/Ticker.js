import React, { Component } from 'react';
import io from 'socket.io-client';

const domain = 'http://localhost:4000';
var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
            "timeout" : 10000, //before connect_error and connect_timeout are emitted.
            "transports" : ["websocket"]
        };
const socket = io(domain, connectionOptions);

class Ticker extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
    }
  }
  componentWillMount() {
    const self = this;
    socket.emit('ticker', this.props.ticker);
    socket.on('quote', (data) => {
      self.setState({data: JSON.parse(data)})
    });
  }

  render() {
    const tickerData = this.state.data;
    return (
      <div className="Ticker">
        <div>{tickerData.ticker}</div>
        <div>{tickerData.exchange}</div>
        <div>{tickerData.price}</div>
        <div>{tickerData.change}</div>
        <div>{tickerData.change_percent}</div>
      </div>
    );
  }
}

export default Ticker;
