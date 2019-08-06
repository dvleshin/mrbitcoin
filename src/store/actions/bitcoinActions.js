import BitcoinService from '../../services/BitcoinService'

export const fetchData = (data, type) => {
    return {
        type,
        data
    }
};

export const getRate = (coins) => {
    return (dispatch) => {
        return BitcoinService.getRate(coins)
            .then(response => {                
                dispatch(fetchData(response, 'getRate'))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getMarketPrice = () => {
    return (dispatch) => {
        return BitcoinService.getMarketPrice()
            .then(response => {                
                dispatch(fetchData(response, 'getMarketPrice'))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const confirmedTransactionsData = () => {
    return (dispatch) => {
        return BitcoinService.getConfirmedTransactions()
            .then(response => {                
                dispatch(fetchData(response, 'getConfirmedTransactions'))
            })
            .catch(error => {
                throw (error);
            });
    };
};