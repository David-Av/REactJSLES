import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/post";

// let posts = [
//   {id:1,post:"hi, how are you?" , likes : 12},
//   {id:2,post:"It's my first POst" , likes : 187},
//   {id:3, post:"post"}
// ]
// let postsElements = posts
// .map(element => <Post message = {element.post} like={element.likes}/>)
const Myposts = (props) => {
  let postsElements = props.mypost
  .map(element => <Post message = {element.post} like={element.likes}/>)
  return (
    <div className={s.postsBlock}>
     <h2> MY POSTS</h2>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>NEW POST</div>

    {postsElements}

    
    </div>
  );
};


export default Myposts;
{
  /* <div className ={p.item}>
          <img src="https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" alt=""/>
          POST1
        </div>
        <div className ={p.item}>
        <img src="https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" alt=""/>
          POST 2
        </div> */
}

