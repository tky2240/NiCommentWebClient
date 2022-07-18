import React, { useState, useRef, useEffect, ChangeEvent, ChangeEventHandler } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { CommentList, Comment } from './CommentList';

type Props = {
    WebSocket: WebSocket
    UserID: string
    UserName: string
    IsOpen: boolean
}

const SendCommentForm = (props: Props) => {
    const socket = props.WebSocket;
    const [message, setMessage] = useState("");
    const sendMessage = () => {
        if (message != "") {
            socket.send(JSON.stringify(new Comment(props.UserID, props.UserName, message, false)));
        }
        setMessage("");
    };
    if (props.IsOpen) {
        return (
            <Stack direction="row" justifyContent='center' spacing={5}>
                <TextField style={{ width: '60%' }} id="outlined-search" label="コメント" type='search' value={message} onChange={(e: ChangeEvent) => setMessage((e.target as HTMLInputElement).value)} />
                <Button style={{ width: '10%' }} variant="contained" endIcon={<SendIcon />} onClick={sendMessage}>
                    送信
                </Button>
            </Stack>
        );
    } else {
        return (<div>接続終了</div>)
    }

}

export default SendCommentForm;