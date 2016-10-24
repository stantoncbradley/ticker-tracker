import React, { PropTypes } from 'react'
import { Alert } from 'react-bootstrap'

const Alerts = ({ alerts, deleteAlert }) => (
  <div>
    {alerts.map((alert, index) => (
      <Alert bsStyle='warning' onDismiss={() => deleteAlert(index)} key={index}>
        {alert}
      </Alert>
    ))}
  </div>
)

Alerts.propTypes = {
  alerts: PropTypes.array,
  deleteAlert: PropTypes.func
}

export default Alerts
