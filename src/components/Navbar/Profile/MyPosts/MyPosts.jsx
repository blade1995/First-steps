import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <div> My Posts</div>
      <div>
        <textarea rows="2"></textarea>
        <button>Add New Post</button>
      </div>
      <Post message='Hello body' counter='34'/>
      <Post message='I am the best web developer.' counter='64'/>
    </div>
  );
};
export default MyPosts;
