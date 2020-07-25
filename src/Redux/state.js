// import {_callSubscriber} from '.././render';
import profilePageReducer from "./ProfilePageReducer"
import messagesPageReducer from "./messagesPageReducer"
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {
   _state : {
    profilePage:{
      posts : [
          {id:1,post:"hi, how are you?" , likes : 12},
          {id:2,post:"It's my first POst" , likes : 187},
          {id:3, post:"post"}
        ],
        newPostText:"David"
    },
    messagesPage:{
            //DIalogsic
     dialogsData : [
      { id: 5, name: "David" },
      { id: 1, name: "Ani" },
      { id: 2, name: "John" },
      { id: 3, name: "Ezo" },
      { id: 4, name: "Jennifer" }
    ],
    // **************************************************
    // **************************************************
     dialogsmessages: [
      { id: 5, message: "hi" },
      { id: 1, message: "barev" },
      { id: 2, message: "privet" },
      { id: 3, message: "Yo" },
      { id: 4, message: "YO" }
    ],
    newMessageBody : ""
    },
    sidebar:{
        myfriends:[
            {name:"Davit",img:"https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"},
            {name:"Ani", img:"https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"},
            {name:"John", img:"https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"}
        ]
    }
    // verj*****************************************************************

},
getState(){
  return this._state},
_callSubscriber() {
  
},
  addPost  (postMessage) {
   
  let newPost = {
    id:7,
    post:this._state.profilePage.newPostText,
    likes: 0
  };
  this._state.profilePage.posts.push(newPost)
  this._state.profilePage.newPostText = "";
  this._callSubscriber(this._state)
},
updateNewPostText (newText){
  this._state.profilePage.newPostText = newText
  this._callSubscriber(this._state)
},
updateNewMessageBody(text){
  this._state.messagesPage.newMessageBody = text;
  this._callSubscriber(this._state)
},
sendMessage(){

},
subscribe (observer) {
  this._callSubscriber = observer
},

    dispatch(action){
    this._state.profilePage =  profilePageReducer(this._state.profilePage, action)
    this._state.messagesPage =  messagesPageReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
   
    }
    }
    

// export const addPostActionCreator = () =>({type:ADD_POST})
  
   
// export const upDateNewPostTextActionCreator = (text) =>{
//   return {
//     type:UPDATE_POST_TEXT,newText:text
//   }
// }
// export const updateNewMessageBodyActionCreator = (text) =>{
//   return {type:UPDATE_NEW_MESSAGE_BODY,messageText:text}
// }
// export const sendMessageActionCreator = ()=>{
//   return {type:SEND_MESSAGE}
// }
export default store;
