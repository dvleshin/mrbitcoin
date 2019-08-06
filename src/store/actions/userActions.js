import UserService from '../../services/UserService'

export const fetchData = (data) => {
    return {
        type: 'getUser',
        data
    }
};

export const getUser = () => {
    return (dispatch) => {
        return UserService.getUser()
            .then(response => {
                dispatch(fetchData(response))
            })
            .catch(error => {
                throw (error);
            });
    };
};