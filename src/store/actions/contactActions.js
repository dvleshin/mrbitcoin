import ContactService from '../../services/ContactService'

export const fetchData = (data, type) => {
    return {
        type,
        data
    }
};

export const getContacts = (term = null) => {
    return (dispatch) => {
        return ContactService.getContacts(term)
            .then(response => {
                dispatch(fetchData(response, 'getContacts'))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getContactById = (id) => {
    return (dispatch) => {
        if (id) {
            return ContactService.getContactById(id)
                .then(response => {
                    dispatch(fetchData(response, 'getContactById'))
                })
                .catch(error => {
                    throw (error);
                });
        } else {
            dispatch(fetchData({
                name: "",
                phone: "",
                email: ""
            }, 'getContactById'))
        }
    };
};

export const saveContact = (contact) => {
    return (dispatch) => {
        return ContactService.saveContact(contact)
            .then(response => {
                dispatch(fetchData(response, 'saveContact'))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteContact = (id) => {
    return (dispatch) => {
        return ContactService.deleteContact(id)
            .then(response => {
                dispatch(fetchData(response, 'deleteContact'))
            })
            .catch(error => {
                throw (error);
            });
    };
};