import { connect } from 'react-redux'
import { addTicker, addAlert } from '../actions'
import AddTickerComponent from '../components/AddTicker'

const mapStateToProps = (state) => ({
  tickers: state.tickerList,
})

const dispatchProps = (dispatch) => ({
  addTicker: (newTicker, tickers) => {
    if (tickers.indexOf(newTicker) > -1) {
      dispatch(addAlert(`${newTicker} already exists!`))
      return;
    }
    dispatch(addTicker(newTicker))
  }
})

const AddTicker = connect(
  mapStateToProps,
  dispatchProps,
)(AddTickerComponent)

export default AddTicker
