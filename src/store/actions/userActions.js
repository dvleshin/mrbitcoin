import UserService from '../../services/UserService'

export const fetchData = (data, type) => {
    return {
        type,
        data
    }
};

export const getUser = () => {
    return (dispatch) => {
        return UserService.getUser()
            .then(response => {
                dispatch(fetchData(response, 'getUser'))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const signup = (name) => {
    return (dispatch) => {
        return UserService.signup(name)
            .then(response => {
                dispatch(fetchData(response, 'signup'))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const onTransferCoins = (user, contact) => {
    return (dispatch) => {
        return UserService.addMove(user, contact)
            .then(response => {
                dispatch(fetchData(response, 'onTransferCoins'))
            })
            .catch(error => {
                throw (error);
            });
    };
};