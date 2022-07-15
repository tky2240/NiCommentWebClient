import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CommentList, CommentSetting } from './CommentList';
import SendCommentForm from './SendCommentForm';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { width } from '@mui/system';
import Container from '@mui/material/Container';

type Props = {
  WebSocket: WebSocket
}

function App(props: Props) {
  const commentSettings: CommentSetting[] = [
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
    new CommentSetting("hoge", "joge", "fuga"),
  ]

  return (
    <Container style={{ width: '100vh', height: '100vh', minWidth: 200, minHeight: 200 }}>
      <Container style={{ padding: 20, width: '80%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
        <CommentList CommentSettings={commentSettings} WebSocket={props.WebSocket} />
      </Container>
      <Container style={{ padding: 20, width: '80%', height: '10%', alignItems: 'center', justifyContent: 'center' }}>
        <SendCommentForm WebSocket={props.WebSocket} />
      </Container>
    </Container>
  );
}

export default App;
