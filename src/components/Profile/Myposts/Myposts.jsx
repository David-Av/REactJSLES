import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/post";


const Myposts = (props) => {
  let postsElements = props.mypost.map((element) => (
    <Post message={element.post} like={element.likes} />
  ));
  let newPostElement = React.createRef();
    let addPost = () => {
      props.dispatch({type:"ADD-POST"})
    }
    let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:text})
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
