import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { SetChannelInfo } from '../features/appSlice'
import "./SidebarChats.css"
function SidebarChats({avatar,name,lastMessage,id,desc  }) {
    const dispatch = useDispatch()
    const handleChat=()=>{
        dispatch(
            SetChannelInfo({
                channelId:id,
                channelName:name,
                channelImage:avatar,
                channelDesc:desc


            })

        )

    }
    return (
        <div className="sidebarChats" onClick={handleChat}>
            <Avatar className="sidebarChats_avatar" src={avatar}/>
            <div>
                <h2>{name}</h2>
                <p>{lastMessage}</p>
            </div>
            
        </div>
    )
}

export default SidebarChats
