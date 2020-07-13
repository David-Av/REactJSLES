import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import state from './Redux/state';
import store from './Redux/state';
import {addPost, subscribe} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {updateNewPostText} from './Redux/state';

export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App appState={state} addPost={store.addPost.bind(store)}
        updateNewPostText = {store.updateNewPostText.bind(store)}
      />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
serviceWorker.unregister();
