import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
     <div> <img
        src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
        alt=""
      />{props.message} </div>
      <div><span>Like </span> {props.counter} </div>
    </div>
  );
};
export default Post;
