import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/post";
import {addPostActionCreator,upDateNewPostTextActionCreator} from '../../../Redux/state'

const Myposts = (props) => {

  let postsElements = props.mypost.map((element) => (
    <Post message={element.post} like={element.likes} />
  ));
  let newPostElement = React.createRef();
    let addPost = () => {
      props.dispatch(addPostActionCreator())
    }
    let onPostChange = () =>{
      let text = newPostElement.current.value;
      let action = upDateNewPostTextActionCreator(text)
      props.dispatch(action)
    }
  return (
    <div className={s.postsBlock}>
      <h2 > MY POSTS</h2>
      <div>
        <input type="text"  autoFocus={true}  ref={newPostElement} value={props.newPostText}
        onChange = {onPostChange}  />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>NEW POST</div>

      {postsElements}
    </div>
  );
};

export default Myposts;
