import React, { PropTypes } from 'react'
import { Table } from 'react-bootstrap'
import TickerRow from '../containers/TickerRow'

const TickerTable = ({ tickers }) => (
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
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      { tickers.map(ticker => (
        <TickerRow ticker={ticker} key={ticker}/>
      ))}
    </tbody>
  </Table>
)

TickerTable.propTypes = {
  tickers: PropTypes.array
}

export default TickerTable
