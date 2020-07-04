import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU" />
      <div className = {s.descriptionBlock}>AVA +DESC</div>
    </div>
  );
};
export default ProfileInfo;
