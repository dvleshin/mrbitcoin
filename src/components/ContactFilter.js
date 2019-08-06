import React, { Component } from 'react';

class ContactFilter extends Component{

    handleChange = (event) => {
        this.props.onFilter(event.target.value)
      }

    render(){
        return <div className="filter-section">
            <input type="text" placeholder="Search contact..." onChange={this.handleChange}></input>
        </div>
    }
}

export default ContactFilter;