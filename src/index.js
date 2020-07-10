import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './components/Profile/Myposts/Post/post';
//hanel em myposti mejic
let posts = [
  {id:1,post:"hi, how are you?" , likes : 12},
  {id:2,post:"It's my first POst" , likes : 187},
  {id:3, post:"post"}
]
let postsElements = posts
.map(element => <Post message = {element.post} like={element.likes}/>)
// verj*****************************************************************
//DIalogsic
let dialogsData = [
  { id: 5, name: "David" },
  { id: 1, name: "Ani" },
  { id: 2, name: "John" },
  { id: 3, name: "Ezo" },
  { id: 4, name: "Jennifer" }
];
// **************************************************
// **************************************************
let messages = [
  { id: 5, message: "hi" },
  { id: 1, message: "barev" },
  { id: 2, message: "privet" },
  { id: 3, message: "Yo" },
  { id: 4, message: "YO" }
]
//
ReactDOM.render(
  <React.StrictMode>
    <App myposti={postsElements} dialogsData = {dialogsData} dialogsmessages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
