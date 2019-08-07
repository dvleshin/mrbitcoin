import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signup } from '../store/actions/userActions'

class ContactEditPage extends Component {
    state = {user: {name: ''}}

    handleChange = (ev) => {
        let { name, value } = ev.target
        this.setState({ user: {...this.state.user, [name]: value} });
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        this.props.dispatch(signup(this.state.user.name))
        // const {history} = this.props;
        // history.push('/contact')
    }

    render(){
        return <div>
            <div className="edit-form signup-form">
            <form onSubmit={this.handleSubmit} className="flex flex-column">
                    <label className="singup-label">Please enter you name</label>
                    <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.user.name}/>
                    <div className="flex justify-center">
                    <button>SIGN UP</button>
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
export default connect(mapStateToProps)(ContactEditPage)