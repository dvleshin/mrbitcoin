import React, { Component } from 'react';
import Chart from '../components/Chart'
import { connect } from 'react-redux'
import { getMarketPrice } from '../store/actions/bitcoinActions'
import { confirmedTransactionsData } from '../store/actions/bitcoinActions'

class StatisticPage extends Component {

    componentDidMount () {
      const { dispatch } = this.props
      this.getMarketPrices(dispatch);
      this.confirmedTransactionsData(dispatch)
    
    }

    async getMarketPrices(dispatch) {
      dispatch(getMarketPrice())
    }  
    async confirmedTransactionsData(dispatch) {
      dispatch(confirmedTransactionsData())
    }

  render(){
    return <div>
      {this.props.marketPriceData && <Chart data={this.props.marketPriceData}></Chart>}
      {this.props.confirmedTransactionsData && <Chart data={this.props.confirmedTransactionsData}></Chart>}
    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    marketPriceData:state.bitcoinReducer.marketPriceData,
    confirmedTransactionsData:state.bitcoinReducer.confirmedTransactionsData
  }
}

export default connect(mapStateToProps)(StatisticPage)

// export default StatisticPage;