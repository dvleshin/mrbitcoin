import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getContactById } from '../store/actions/contactActions'
import { deleteContact } from '../store/actions/contactActions'
import { saveContact } from '../store/actions/contactActions'
import UserProfileImage from '../components/UserProfileImage'

class ContactEditPage extends Component {
    state = {contactDetails: {name: "", phone:"", email:""}}

    async componentDidMount () {
        if (this.props.match.params.id) {
            const {id} = this.props.match.params
            this.props.dispatch(getContactById(id))
            .then(() => {
                this.setState({contactDetails: this.props.contactDetails})
            })
        }
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log(this.state.contactDetails);
        
        this.props.dispatch(saveContact(this.state.contactDetails))
        const {history} = this.props;
        history.push('/contact')
    }

    handleChange = (ev) => {
        let { name, value } = ev.target
        this.setState({ contactDetails: {...this.state.contactDetails, [name]: value} });
    }

    handleDelete = async () => {
        this.props.dispatch(deleteContact(this.props.contactDetails._id))
        const {history} = this.props;
        history.push('/contact')
    }

    render(){
        return <div>
        <div className="second-header"></div>

            <Link to={`/contact/${this.props.match.params.id ? this.props.match.params.id : ''}`}>
                <button>back</button>
            </Link>

            <UserProfileImage></UserProfileImage>

            <div className="edit-form">
                <form onSubmit={this.handleSubmit} className="flex flex-column">
                    <input 
                    type="text" 
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.contactDetails.name}
                    placeholder="Name"/>
                    <input 
                    type="tel"
                    name="phone"
                    onChange={this.handleChange}
                    value={this.state.contactDetails.phone}
                    placeholder="Phone"/>
                    <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.contactDetails.email}
                    placeholder="Email"/>
                    <div className="flex">
                    <button>{this.props.match.params.id ? 'SAVE' : 'ADD'}</button>
                    {this.props.match.params.id ? <button onClick={this.handleDelete}>DELETE</button> : ''}
                    </div>
                </form>
            </div>
        </div>
      }
}
const mapStateToProps = (state) => {
    return {
    contactDetails:state.contactReducer.contactDetails,
    }
  }
export default connect(mapStateToProps)(ContactEditPage)