import {
    log
} from "util";

export default {
    getUser,
    signup,
    addMove
}

async function getUser() {
    let user = _loadFromStorage('user')

    if (!user) {
        user = {
            name: "Evan You",
            coins: 10750,
            moves: []
        }
        _saveToStorage('user', user)
    }
    return await user
}

async function signup(name) {
    let user = {
        name: name,
        coins: 100,
        moves: []
    }
    _saveToStorage('user', user)
}

async function addMove(user, contact) {
    // console.log('got from userService:', user, contact);
    
    let loggedInUser = _loadFromStorage('user')
    
    loggedInUser.moves.unshift({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: +user.amount
    })
    loggedInUser.coins -= +user.amount;

    _saveToStorage('user', loggedInUser)

    return await loggedInUser
}

function _saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function _loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}