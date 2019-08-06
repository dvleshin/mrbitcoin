import React, { Component } from 'react';
import NoUserImg from '../assets/imgs/nouser.png'


function UserProfileImage () {
        return <div className="flex justify-center">
                    <div className="first-circle">
                        <div className="second-circle flex justify-center">
                            <img src={NoUserImg} className="main-user-img"/>
                        </div>
                    </div>
                </div>
}    

export default UserProfileImage;