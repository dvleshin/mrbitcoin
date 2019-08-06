import Axios from 'axios'

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

async function getRate(coins) {
    let API = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    const res = await Axios.get(API)
    try {
        return res.data
    } catch (err) {
        console.log(err); 
    }
}

async function getMarketPrice() {
    let API = `https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true`
    const res = await Axios.get(API)
    try {
        return res.data;
    } catch (err) {
        console.log(err); 
    }
}

async function getConfirmedTransactions() {
    let API = `https://api.blockchain.info/charts/n-transactions?timespan=30days&format=json&cors=true`
    const res = await Axios.get(API)
    try {
        return res.data;
    } catch (err) {
        console.log(err); 
    }
}