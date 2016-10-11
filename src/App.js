import React, { Component } from 'react';
import {
  PageHeader,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Well,
  Button,
  Alert,
  Table
} from 'react-bootstrap';
import TickerRow from './TickerRow.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickers: ['AAPL'],
      alert: null
    }
  }

  _renderAlert() {
    if (this.state.alert) {
      return <Alert bsStyle='warning' onDismiss={this._dismissAlert.bind(this)}>{this.state.alert}</Alert>
    }
  }

  _dismissAlert() {
    this.setState({ alert: null})
  }

  _addTicker(event) {
    event.preventDefault()
    const newTicker = event.target.elements[0].value.toUpperCase();
    if (this.state.tickers.indexOf(newTicker) > -1) {
      this.setState({
        alert: `${newTicker} already exists!`
      })
      return;
    }
    this.setState({
      alert: null,
      tickers: this.state.tickers.concat(newTicker)
    })
  }

  render() {
    return (
      <div className="container">
        <PageHeader style={{textAlign: 'center'}}>Ticker Tracker</ PageHeader>
        {this._renderAlert()}
        <Form inline onSubmit={this._addTicker.bind(this)}>
          <FormGroup>
            <ControlLabel>Add by ticker:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="ticker"
            />
          </FormGroup>
          {' '}
          <Button bsStyle="success" type="submit">Add</Button>
        </Form>
        <br />
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ticker</th>
              <th>exchange</th>
              <th>price</th>
              <th>change</th>
              <th>change percent</th>
              <th>last trade time</th>
              <th>dividend</th>
              <th>yield</th>
            </tr>
          </thead>
          <tbody>
            { this.state.tickers.map(ticker => (
              <TickerRow ticker={ticker} key={ticker}/>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
