import React, { Component } from 'react';
import NoUserImg from '../assets/imgs/nouser.png'
import { Link } from 'react-router-dom';

class UserPreview extends Component {
    render(){
        return <Link to={`/contact/${this.props.contact._id}`}>
                <li className="flex">
            <div>
                <img src={NoUserImg} className="user-img"/>
            </div>
            <div>
                <span className="name-title">{this.props.contact.name}</span> <br />
                <span className="name-phone">{this.props.contact.phone}</span>
            </div>
        </li>
     </Link>
        
    }
}

export default UserPreview;