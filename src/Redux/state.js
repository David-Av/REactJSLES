import {rerenderEntireTree} from '.././render';

  let state = {
      profilePage:{
        posts : [
            {id:1,post:"hi, how are you?" , likes : 12},
            {id:2,post:"It's my first POst" , likes : 187},
            {id:3, post:"post"}
          ]
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
  
  }
export let addPost = (postMessage) =>{
    let newPost = {
      id:7,
      post:postMessage,
      likes: 0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
  }

  export default state;