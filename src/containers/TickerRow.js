import { connect } from 'react-redux'
import { deleteTicker } from '../actions'
import TickerRowComponent from '../components/TickerRow'

const dispatchProps = (dispatch) => ({
  deleteTicker: (ticker) => dispatch(deleteTicker(ticker))
})

const TickerRow = connect(
  null,
  dispatchProps,
)(TickerRowComponent)

export default TickerRow
