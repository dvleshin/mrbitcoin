import React, { Component } from 'react';
import ContactPreview from './ContactPreview.js'

class  ContactList extends Component{


    render(){
        return <div>
          <ul className="contact-list flex">
            {this.props.contacts.map((currContact) => (
              <ContactPreview key={currContact._id} contact={currContact}></ContactPreview>
            ))}
          </ul>
      </div>
    }
}

export default ContactList;