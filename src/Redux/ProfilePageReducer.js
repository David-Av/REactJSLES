const { act } = require("react-dom/test-utils");
export const addPostActionCreator = () =>({type:ADD_POST})
  
   
export const upDateNewPostTextActionCreator = (text) =>{
  return {
    type:UPDATE_POST_TEXT,newText:text
  }
}
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-NEW-POST-TEXT"
 const profilePageReducer = (state, action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:7,
                post:state.newPostText,
                likes: 0
              };
              state.posts.push(newPost)
              state.newPostText = "";
              return state;
              case UPDATE_POST_TEXT:
             state.newPostText = action.newText
             return state;
             default:
                 return state;
    }
    // if(action.type === ADD_POST){
    //     // let newPost = {
    //     //     id:7,
    //     //     post:state.newPostText,
    //     //     likes: 0
    //     //   };
    //     //   state.posts.push(newPost)
    //     //   state.newPostText = "";
    // }else if(action.type === UPDATE_POST_TEXT){
    // //    state.newPostText = action.newText
    // }
    // return state;
}

export default profilePageReducer;