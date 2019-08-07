import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getContactById } from '../store/actions/contactActions'
import UserProfileImage from '../components/UserProfileImage'
import TransferFund from '../components/TransferFund'

class ContactDetailsPage extends Component {
    async componentDidMount () { 
        const {id} = this.props.match.params
        this.props.dispatch(getContactById(id))
    }

    render(){
        return <div>
        <div className="second-header"></div>
        <div className="user-nav flex flex-between">
            <Link to="/contact"><i className="fas fa-long-arrow-alt-left"></i></Link>
            <Link to={`edit/${this.props.match.params.id}`}><i className="fas fa-edit"></i></Link>
        </div>
            <UserProfileImage></UserProfileImage>
            <div className="flex justify-center">
                <ul className="user-contact-details">
                    <li>{this.props.contactDetails.name}</li>
                    <li>{this.props.contactDetails.phone}</li>
                    <li>{this.props.contactDetails.email}</li>
                </ul>
            </div>
            <TransferFund contact={this.props.contactDetails}></TransferFund>
        </div>
      }
}

const mapStateToProps = (state) => {
    return {
    contactDetails:state.contactReducer.contactDetails,
    }
  }
  
export default connect(mapStateToProps)(ContactDetailsPage)