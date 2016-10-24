import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Alerts from '../../containers/Alerts'
import AddTicker from '../../containers/AddTicker'
import TickerTable from '../../containers/TickerTable';

const App = () => (
  <div className="container">
    <PageHeader style={{textAlign: 'center'}}>Ticker Tracker</ PageHeader>
    <Alerts />
    <AddTicker />
    <br />
    <TickerTable />
  </div>
)

export default App;
