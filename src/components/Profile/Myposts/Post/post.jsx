import React from 'react';
import p from './post.module.css'

const Post =() =>{
    return(
        <div className ={p.item}>
        <img src="https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg" alt=""/>
        POST1
        <div>
        <span>like</span>
        </div>
      </div>
    )
}

export default Post;