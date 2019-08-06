export default function 
    bitcoinReducer(state = {btc: 0, marketPriceData: null, confirmedTransactionsData: null}, action) {
    switch (action.type) {
        case 'getRate':
        return {...state , btc: action.data}; 
        case 'getMarketPrice':
        return {...state , marketPriceData: action.data}; 
        case 'getConfirmedTransactions':
        return {...state , confirmedTransactionsData: action.data}; 
      default:
        return state;
    }
  }