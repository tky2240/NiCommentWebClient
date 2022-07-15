import React, { useState, useRef, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

class CommentSetting {
    UserID: string;
    UserName: string;
    Message: string;

    constructor(userID: string, username: string, message: string) {
        this.UserID = userID;
        this.UserName = username;
        this.Message = message;
    }
}

type Props = {
    CommentSettings: CommentSetting[]
    WebSocket: WebSocket
}

const CommentList = (props: Props) => {
    const CommentListItem = (commentSetting: CommentSetting) => {
        return (
            <div>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar children={commentSetting.UserName.substring(0, 1)} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={commentSetting.UserName}
                        secondary={commentSetting.Message}
                    />
                </ListItem>
                <Divider />
            </div>
        )
    }
    const [commentList, setComment] = useState(props.CommentSettings.map(x => CommentListItem(x)));
    const socket = props.WebSocket
    socket.onopen = function () {
        setComment([...commentList, CommentListItem(new CommentSetting("test", "test", "connect server"))]);
    }
    socket.onmessage = function (event) {
        const recieve = JSON.parse(event.data)
        setComment([...commentList, CommentListItem(new CommentSetting(recieve.username, recieve.username, recieve.message))]);
    }
    const scrollRef = useRef<null | HTMLDivElement>(null)
    const listRef = useRef<null | HTMLUListElement>(null)
    useEffect(() => {
        scrollRef.current?.scroll({ top: listRef.current?.clientHeight, behavior: "smooth" })
    }, [commentList]);
    return (
        <Paper style={{ maxHeight: '100%', overflow: 'auto' }} ref={scrollRef} >
            <List sx={{ bgcolor: 'background.paper' }} ref={listRef}
                children={commentList} />
        </Paper>
    );
}


export { CommentList, CommentSetting };