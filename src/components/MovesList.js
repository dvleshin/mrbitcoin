import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class MovesList extends Component {
    render(){        
        return <div className="moves-list">
        <p>Your last transactions:</p>
        <ul className="contact-list flex">
          { this.props.moves === [] ? 
          (<li>No transactions</li>) :
          (this.props.moves.map((move) => (
            <li className="moves">
                <div><span>To:</span> <span>{move.to}</span></div>
                <div><span>At:</span> <span>{<Moment element="span" format="DD/MM/YYYY HH:mm">{move.at}</Moment>}</span></div>
                <div><span>Amount:</span> <span>{move.amount} coins</span></div>
            </li>
        )))
        }
        </ul>
    </div>
        
    }
}

export default MovesList;