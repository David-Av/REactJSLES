// import {rerenderEntireTree} from '.././render';
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
    ]
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
rerenderEntireTree() {
  console.log("state Changed");
},
  addPost  (postMessage) {
   
  let newPost = {
    id:7,
    post:this._state.profilePage.newPostText,
    likes: 0
  };
  this._state.profilePage.posts.push(newPost)
  this._state.profilePage.newPostText = "";
  this.rerenderEntireTree(this._state)
},
updateNewPostText (newText){
  this._state.profilePage.newPostText = newText
  this.rerenderEntireTree(this._state)
},
subscribe (observer) {
  this.rerenderEntireTree = observer
}

}
export default store;
// let rerenderEntireTree

//   let state = {
//       profilePage:{
//         posts : [
//             {id:1,post:"hi, how are you?" , likes : 12},
//             {id:2,post:"It's my first POst" , likes : 187},
//             {id:3, post:"post"}
//           ],
//           newPostText:"David"
//       },
//       messagesPage:{
//               //DIalogsic
//        dialogsData : [
//         { id: 5, name: "David" },
//         { id: 1, name: "Ani" },
//         { id: 2, name: "John" },
//         { id: 3, name: "Ezo" },
//         { id: 4, name: "Jennifer" }
//       ],
//       // **************************************************
//       // **************************************************
//        dialogsmessages: [
//         { id: 5, message: "hi" },
//         { id: 1, message: "barev" },
//         { id: 2, message: "privet" },
//         { id: 3, message: "Yo" },
//         { id: 4, message: "YO" }
//       ]
//       },
//       sidebar:{
//           myfriends:[
//               {name:"Davit",img:"https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"},
//               {name:"Ani", img:"https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"},
//               {name:"John", img:"https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"}
//           ]
//       }
//       // verj*****************************************************************
  
//   }
 
// export let addPost = (postMessage) =>{
//     let newPost = {
//       id:7,
//       post:state.profilePage.newPostText,
//       likes: 0
//     };
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = "";
//     rerenderEntireTree(state)
//   }

//   export let updateNewPostText = (newText)=>{
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
//   }
//   export const subscribe = (observer) =>{
//     rerenderEntireTree = observer
//   }
//   export default state;
  // window.state = state;