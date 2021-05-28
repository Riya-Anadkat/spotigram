import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="Test"
                />

                <h3>Username</h3>
            </div>
            <img 
                className="post__image"
                alt="alt image"
            />
            <h4 className="post__text">
                <strong>
                Username 
                </strong>
             Caption
            </h4>
        </div>
    )
}

export default Post
