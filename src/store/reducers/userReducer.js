
export default function 
    userReducer(state = {user:{}  }, action) {
    switch (action.type) {
        case 'getUser':
        return {...state , user: action.data}; 
      default:
        return state;
    }
  }