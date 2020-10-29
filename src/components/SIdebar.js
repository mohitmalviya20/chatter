import React from 'react'
import "./Sidebar.css"
import logo from "./logo.svg"
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';
import { ExitToApp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { auth } from './firebase';
function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} alt="chatter"/>
            <div className="sidebar_icons">
                <GroupAddIcon/>
                <PersonIcon/>
                <div onClick={()=>auth.signOut()} className="logout">
                <ExitToApp/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
