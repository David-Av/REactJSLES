import React from "react";
import p from "./Myposts.module.css";
import Post from "./Post/post";

const Myposts = () =>{
    return(
        <div>
        MY POSTS
        <textarea></textarea>
        <button>Add post</button>
        <div className ={p.posts}>
          NEW POST
        </div>
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
}

export default Myposts;
        {/* <div className ={p.item}>
          <img src="https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" alt=""/>
          POST1
        </div>
        <div className ={p.item}>
        <img src="https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" alt=""/>
          POST 2
        </div> */}