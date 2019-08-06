import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component { 

    render(){
        return <navbar className="header">
            <ul className="flex flex-row flex-between">
                <li><Link exact to="/">Mr. BitCoin</Link></li>
                <li className="contact-header-icon"><Link exact to="/contact"><i className="fas fa-users"></i></Link></li>
            </ul>
        </navbar>
    }
}


export default Header;