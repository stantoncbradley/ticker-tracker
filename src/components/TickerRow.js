import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';
import { Button } from 'react-bootstrap'

// const domain = 'http://localhost:4000';
const domain = 'https://quote-stream.herokuapp.com/'
const socket = io(domain);

class TickerRow extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
    }
  }
  componentWillMount() {
    const self = this;
    socket.emit('ticker', this.props.ticker);
    socket.on(this.props.ticker, (data) => {
      const parsedData = JSON.parse(data);
      console.log(data);
      self.setState({data: parsedData})
    });
  }

  componentWillUnmount() {
    socket.close()
  }

  render() {
    const tickerData = this.state.data;
    return (
      <tr>
        <td>{tickerData.ticker}</td>
        <td>{tickerData.exchange}</td>
        <td>{tickerData.price}</td>
        <td>{tickerData.change}</td>
        <td>{tickerData.change_percent}</td>
        <td>{tickerData.last_trade_time}</td>
        <td>{tickerData.dividend}</td>
        <td>{tickerData.yield}</td>
        <td>
          <Button bsStyle="danger" onClick={() => this.props.deleteTicker(tickerData.ticker)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

TickerRow.propTypes = {
  ticker: PropTypes.string,
  deleteTicker: PropTypes.func
}

export default TickerRow;
