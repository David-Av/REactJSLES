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
// verj
ReactDOM.render(
  <React.StrictMode>
    <App myposti={postsElements}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
