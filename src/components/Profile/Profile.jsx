import React from "react";
import s from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Myposts mypostp={props.mypost}/>
    </div>
  );
};
export default Profile;

{
  /* <div>
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
      </div> */
}
