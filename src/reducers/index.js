const defaultState = {
  tickerList: ['AAPL', 'GOOG', 'ENV', 'MSFT', 'FB'],
  alerts: [],
}

const app = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_ALERT':
      return Object.assign({}, state, {
        alerts: [...state.alerts, action.payload.alert]
      })
    case 'DELETE_ALERT':
      return Object.assign({}, state, {
        alerts: [
          ...state.alerts.slice(0, action.payload.index),
          ...state.alerts.slice(action.payload.index + 1)
        ]
      })
    case 'ADD_TICKER':
      return Object.assign({}, state, {
        tickerList: [...state.tickerList, action.payload.ticker]
      })
    case 'DELETE_TICKER':
      const index = state.tickerList.findIndex(id => id === action.payload.ticker)
      return Object.assign({}, state, {
        tickerList: [
          ...state.tickerList.slice(0, index),
          ...state.tickerList.slice(index + 1)
        ]
      })
    default:
      return state
  }
}

export default app
