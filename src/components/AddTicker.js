import React, { PropTypes } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

const AddTicker = ({ tickers, addTicker }) => (
  <Form inline onSubmit={(event) => {
    event.preventDefault()
    const newTicker = event.target.elements[0].value.toUpperCase();
    addTicker(newTicker, tickers)
  }}>
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
)

AddTicker.propTypes = {
  tickers: PropTypes.array,
  addTicker: PropTypes.func
}

export default AddTicker
