import React from 'react'
import "./Body.css"
import ChatInfo from './ChatInfo'
import Chats from './Chats'
import Profile from './Profile'
function Body() {
    return (
        <div className="body">
            <Profile/>
            <Chats/>
            <ChatInfo/>
        </div>
    )
}

export default Body
