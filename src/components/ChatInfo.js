import { Avatar } from '@material-ui/core'
import React, { useEffect } from 'react'
import "./ChatInfo.css"
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { Http, Image, Movie, TextFields } from '@material-ui/icons';

import db from './firebase';
import { useSelector } from 'react-redux';
import { ChannelInformation } from '../features/appSlice';
function ChatInfo() {
    const channelInformation= useSelector(ChannelInformation)
    console.log(channelInformation)

    return (
        <div className="chatInfo">
            <Avatar src={channelInformation.channelImage} className="avatar"/>
            <h2>{channelInformation.channelName}</h2>
            <p>{channelInformation.channelDesc}</p>
            <h2>Shared Files</h2>
            <div className="shared_files">
                <div className="shared_icon">
                    <PictureAsPdfIcon/>
                    <p>ReactIsAwesome.pdf</p>

                </div>
                <div className="shared_icon">
                    <Image/>
                    <p>ReduxIsAwesome.png</p>

                </div>
                <div className="shared_icon">
                    <TextFields/>
                    <p>FirebaseIsAwesome.txt</p>

                </div>
                <div className="shared_icon">
                    <Http/>
                    <p>mohitmalviya.tech</p>

                </div>
                <div className="shared_icon">
                    <Movie/>
                    <p>LearnJavasrcipt.mp4</p>

                </div>
                <div className="shared_icon">
                <TextFields/>
                    <p>aboutJSX.txt</p>

                </div>
                <div className="shared_icon">
                <Image/>
                    <p>React-router.png</p>

                </div>
                <div className="shared_icon">
                    <PictureAsPdfIcon/>
                    <p>AboutReact.pdf</p>

                </div>
            </div>
        </div>
    )
}

export default ChatInfo
