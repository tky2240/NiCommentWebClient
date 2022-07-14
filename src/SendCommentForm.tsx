import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const SendCommentForm = () => {
    return (
        <Stack direction="row" justifyContent='center' spacing={5}>
            <TextField style={{ width: '60%' }} id="outlined-search" label="コメント" type='search' />
            <Button style={{ width: '10%' }} variant="contained" endIcon={<SendIcon />}>
                送信
            </Button>
        </Stack>
    );
}

export default SendCommentForm;