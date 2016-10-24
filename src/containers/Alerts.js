import { connect } from 'react-redux'
import { deleteAlert } from '../actions'
import AlertsComponent from '../components/Alerts'

const mapStateToProps = (state) => ({
  alerts: state.alerts,
})

const dispatchProps = (dispatch) => ({
  deleteAlert: (index) => dispatch(deleteAlert(index))
})

const Alerts = connect(
  mapStateToProps,
  dispatchProps
)(AlertsComponent)

export default Alerts
