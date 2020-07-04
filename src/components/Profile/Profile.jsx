import React from 'react';
import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';
const Profile = ()=>{
    return(
        <div >
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU"/>
      
      <div >
        AVA +DESC
      </div>

      <Myposts/>
    </div>
    )
}
export default Profile;


      {/* <div>
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
      </div> */}