import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CommentList, CommentSetting } from './CommentList';
import SendCommentForm from './SendCommentForm';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { width } from '@mui/system';
import Container from '@mui/material/Container';
import Keycloak from 'keycloak-js';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web'

type Props = {
  WebSocket: WebSocket
}

type KeycloakState = {
  Keycloak: Keycloak | null
  IsAuthenticated: boolean
}

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
  const { keycloak, initialized } = useKeycloak();
  if (keycloak.authenticated) {
    const socket = new WebSocket('ws://localhost:8080/ws');
    return (
      <Container style={{ width: '100vh', height: '100vh', minWidth: 200, minHeight: 200 }}>
        <Container style={{ padding: 20, width: '80%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
          <CommentList CommentSettings={commentSettings} WebSocket={socket} />
        </Container>
        <Container style={{ padding: 20, width: '80%', height: '10%', alignItems: 'center', justifyContent: 'center' }}>
          <SendCommentForm WebSocket={socket} />
        </Container>
      </Container>
    );
  } else {
    return (<div> 初期化中</div>)
  }

}

export default App;
