import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CommentList, CommentSetting } from './CommentList';
import SendCommentForm from './SendCommentForm';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { width } from '@mui/system';
import Container from '@mui/material/Container';

function App() {
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
    <Container style={{ width: '100%', height: '100%', minWidth: 200, minHeight: 200 }}>
      <Container style={{ padding: 20, width: '80%', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
        <CommentList CommentSettings={commentSettings} />
      </Container>
      <Container style={{ padding: 20, width: '80%', height: '10vh', alignItems: 'center', justifyContent: 'center' }}>
        <SendCommentForm />
      </Container>
    </Container>
  );
}

export default App;
