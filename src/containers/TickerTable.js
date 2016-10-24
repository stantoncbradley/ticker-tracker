import { connect } from 'react-redux'
import TickerTableComponent from '../components/TickerTable'

const mapStateToProps = (state) => ({
  tickers: state.tickerList,
})

const TickerTable = connect(
  mapStateToProps
)(TickerTableComponent)

export default TickerTable
