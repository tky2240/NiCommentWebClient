import * as React from 'react';
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
    return (
        <Paper style={{ maxHeight: '100%', overflow: 'auto' }}>
            <List sx={{ bgcolor: 'background.paper' }}
                children={props.CommentSettings.map(x => CommentListItem(x))} />
        </Paper>
    );
}


export { CommentList, CommentSetting };