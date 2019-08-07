import React, { Component } from 'react';
import StatisticPage from './StatisticPage'
import { connect } from 'react-redux'
import { getUser } from '../store/actions/userActions'
import { getRate } from '../store/actions/bitcoinActions'
import UserProfileImage from '../components/UserProfileImage'
import MovesList from '../components/MovesList'

class HomePage extends Component {

    async componentDidMount () {
      const { dispatch } = this.props
      dispatch(getUser())
        .then(()=>{
          dispatch(getRate(this.props.user.coins))
        })
    }

  render(){
    return <div>
        {console.log('Home page:', this.props.user)}
        <section className="user-info flex flex-column">
        <UserProfileImage></UserProfileImage>
      <div className="user-name-title flex justify-center">
        {this.props.user.name}
      </div>
      <div className="flex justify-center">
          <ul className="flex flex-row">
              <li><span><i className="fas fa-dollar-sign"></i> </span> {this.props.user.coins}</li>
              <li><span><i className="fab fa-bitcoin"></i> </span> {this.props.btc}</li>
          </ul>
      </div>
    </section>
    <section>
      <StatisticPage></StatisticPage>
    </section>
    {this.props.user.moves && <MovesList moves={this.props.user.moves}></MovesList>}
    </div>
    
  }
}
const mapStateToProps = (state) => {
  return {
    user:state.userReducer.user,
    btc:state.bitcoinReducer.btc
  }
}

export default connect(mapStateToProps)(HomePage)