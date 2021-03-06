// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  const [likes, setLikes] = useState(10)
  const [comments, setComments] = useState(props.post.comments);
  // set up state for the likes

  return (
    <div className = "post-border" >
      <PostHeader username = {props.post.username} thumbnailUrl = {props.post.thumbnailUrl}/>
      <div className="post-image-wrapper" >
        <img alt = "post thumbnail" className = "post-image" src = {props.post.imageUrl}/>
      </div>
      <LikeSection likes = {likes} setLikes = {setLikes}/>
      <CommentSection postId = {props.post.imageUrl} comments = {comments} setComments ={setComments}/> 
    </div>
  );
};

export default Post;