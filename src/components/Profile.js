import { Avatar, Badge } from '@material-ui/core'
import { Person, Search } from '@material-ui/icons'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from './firebase';
import "./profile.css"
import SidebarChats from './SidebarChats';
function Profile() {
    const user = useSelector(selectUser)
    const [chats, setChats]= useState([])
    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>{
            setChats(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    rooms:doc.data()

                }
            )))
        })


    },[])
    console.log(chats)
    return (
        <div className="profile">
            <div className="profile_avatar">
                <Avatar className="avatar" src={user.photo}/>
                <h1>{user.displayName}</h1>
                <h3>@<span>{user.email.substring(0, user.email.lastIndexOf("@"))}</span></h3>
            </div>
            <div className="profile_online">
                <div className="online_now">
                    <h2>Online Now</h2>
                    <Person/>

                </div>
                <div className="online_now_persons">
                    <div className="online_now">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNfvr-e3dE--_v7q7bQFX3ZEn2aSJtkri3pg&usqp=CAU"/>
                    
                        <h1>•</h1>
                    </div>
                    <div className="online_now">
                    <Avatar src="https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg"/>
                    
                        <h1>•</h1>
                    </div>
                    <div className="online_now">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWqrAYWwD6T8wvm1M7isKD0Dx-ElcpRGOF7g&usqp=CAU"/>
                    
                        <h1>•</h1>
                    </div>
                    <div className="online_now">
                    <Avatar src="https://i.pinimg.com/564x/21/d4/a4/21d4a435e698a52b079b886ad282af6e.jpg"/>
                    
                        <h1>•</h1>
                    </div>
                    <div className="online_now">
                    <Avatar src="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg"/>
                    
                        <h1>•</h1>
                    </div>
                    <div className="online_now">
                    <Avatar src="https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg"/>
                    
                        <h1>•</h1>
                    </div>
                    <div className="online_now">
                    <Avatar src="https://i.pinimg.com/474x/71/cc/ea/71cceac2b5363fae6e8ad00f940b68c4.jpg"/>
                    
                        <h1>•</h1>
                    </div>

                  
                    
                   
                </div>

            </div>
            <div className="chat_rooms">
                <div className="online_now">
                    <h2>Chat Rooms</h2>
                    <MeetingRoomIcon/>
                </div>
                <div className="chat_rooms_search">
                    <Search/>
                    <input placeholder="Search Chats"/>
                </div>
                <div className="sidebar_chats">
                    {
                        chats.map(chat=>(
                            <SidebarChats avatar={chat.rooms.image} name={chat.rooms.name} 
                            key={chat.id}
                            id={chat.id}
                            desc={chat.rooms.description}
                            lastMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/>


                        ))
                    }
                    
                   
                    
                    

                </div>
               

            </div>
        </div>
    )
}

export default Profile
