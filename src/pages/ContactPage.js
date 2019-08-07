import React, { Component } from 'react';
import ContactList from '../components/ContactList'
import ContactFilter from '../components/ContactFilter'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getContacts } from '../store/actions/contactActions'

class ContactPage extends Component {
    async componentDidMount () {
      this.props.dispatch(getContacts())
    }

    setFilter = async (filterBy) => {
      console.log(filterBy);
      this.props.dispatch(getContacts({term: filterBy}))
        // const filteredContacts = await ContactService.getContacts({term: filterBy})
        // this.setState((state) => ({contacts: filteredContacts}));  
    }

  render(){
    return <div>
        <div className="second-header"></div>
        <div className="flex flex-between">
        <ContactFilter onFilter={this.setFilter}></ContactFilter>
        <Link to='/contact/edit'><i className="fas fa-user-plus add-user-btn"></i></Link>
        </div>
        <ContactList contacts={this.props.contacts}></ContactList>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    contacts:state.contactReducer.contacts,
  }
}
export default connect(mapStateToProps)(ContactPage)