export const addAlert = (alert) => ({
  type: 'ADD_ALERT',
  payload: {
    alert: alert
  }
})

export const deleteAlert = (index) => ({
  type: 'DELETE_ALERT',
  payload: {
    index: index
  }
})

export const addTicker = (ticker) => ({
  type: 'ADD_TICKER',
  payload: {
    ticker: ticker
  }
})

export const deleteTicker = (ticker) => ({
  type: 'DELETE_TICKER',
  payload: {
    ticker: ticker
  }
})
