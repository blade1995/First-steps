import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={s.cover}>
        <img src="https://www.perazza.it/wp-content/uploads/2018/05/redes-sociales-mas-utilizadas-empresas.png" />
      </div>
      <div>Avatar + info </div>
      <MyPosts />
   </div>
  );
}
export default Profile;
