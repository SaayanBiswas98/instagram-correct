import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username,caption, imageUrl }){
    return(
        <div class="post">
          <div class="post_header">
            <Avatar
            class="post_avatar"
            alt="{username}"
            src="https://reactjs.org/logo-og.png"/>
            <h3>{username}</h3>
           </div>
            <img class="post_image" src={imageUrl}alt=""/>
            <h4 class="post_text"><strong>{username}</strong>{caption}</h4>
        </div>

    )
}
export default Post;
