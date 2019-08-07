import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onTransferCoins } from '../store/actions/userActions'

class TransferFund extends Component {
    state = {user: {amount: ''}}

    handleChange = (ev) => {        
        let { name, value } = ev.target
        this.setState({ user: {...this.state.user, [name]: value} });
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        this.props.dispatch(onTransferCoins(this.state.user, this.props.contact))
        // const {history} = this.props;
        // history.push('/contact')
    }

    render(){
        return <div>
        <div className="transfer-form">
        <p className="flex justify-center">Transfer coins to <span>{this.props.contact.name}</span></p>
        <form onSubmit={this.handleSubmit} className="flex flex-row justify-center">
                <input 
                type="number"
                name="amount"
                onChange={this.handleChange}
                value={this.state.user.amount}
                max = "100"/>
                <div className="flex justify-center">
                <button className="transfer-btn">TRANSFER</button>
                </div>
            </form>
        </div>
    </div>
    }
}

const mapStateToProps = (state) => {
    return {
    
    }
  }
export default connect(mapStateToProps)(TransferFund)
