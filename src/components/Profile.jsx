import React from 'react';
import p from './Profile.module.css';
const Profile = ()=>{
    return(
        <div className = {p.content}>
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU"/>
      
      <div >
        AVA +DESC
      </div>
      <div>
        MY POSTS
        <div className ={p.posts}>
          NEW POST
        </div>
        <div className ={p.item}>
          POST1
        </div>
        <div className ={p.item}>
          POST 2
        </div>
      </div>
    </div>
    )
}
export default Profile;