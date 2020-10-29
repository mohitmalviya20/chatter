import { Avatar, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChannelInformation } from '../features/appSlice'
import { selectUser } from '../features/userSlice'
import "./Chat.css"
import db from './firebase'
import firebase from "firebase"
function Chats() {
  const user = useSelector(selectUser)
  const [input , setInput]= useState("")
  const channelInfo = useSelector(ChannelInformation)
  const [messages, setMessages]= useState([])

useEffect(()=>{
  if(channelInfo.channelId){
    db.collection('rooms')
            .doc(channelInfo.channelId)
            .collection("messages")
            .orderBy('timestamp','asc')
            .onSnapshot(snapshot=>setMessages(snapshot.docs.map(doc=>doc.data())))

  }

},[channelInfo.channelId])
console.log(messages)



  const handleClick=(e)=>{
    e.preventDefault()
    db.collection("rooms").doc(channelInfo.channelId).collection("messages").add({
      user:user,
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }

    return (
        <div className="chats">
          {
            messages.map(message =>(

              <div className={`chat_body ${
                message.user.displayName=== user.displayName && "chat_body2"}`}>
            <Avatar src={message.user.photo} className="avatar"/>
   
          <p
            className="chat_message" 
          >
            {message.message}
            <span className="chat_timestamp">
                11:30AM
            </span>
          </p>

      </div>



            ))
          }
        
      

        <div className="chat_footer">
            <form>
            <Avatar src={user.photo} className="avatar"/>
                <input placeholder="Type a message" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <IconButton type="submit" onClick={handleClick}>
                <Send/>
                </IconButton>
            </form>
        </div>


      </div>
    )
}

export default Chats
