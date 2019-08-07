export default function 
    contactReducer(state = {contacts:[], contactDetails: {name: "", phone:"", email:""}}, action) {
    switch (action.type) {
        case 'getContacts':
        return {...state , contacts: action.data}; 
        case 'getContactById':
        return {...state , contactDetails: action.data}; 
        case 'saveContact':
        return {...state , contactDetails: action.data}; 
        case 'deleteContact':
        return {...state , contacts: action.data}; 
      default:
        return state;
    }
  }