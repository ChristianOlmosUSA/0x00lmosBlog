import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    
        <div className="blogPostContainer">
            <Card width="100%">
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful Statement 42</h1>
                    <span className="postedBy">posted on July 2019</span>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/memories-from.jpg' )}alt="Post image" />
                </div>
                <div className="postContent">
                    <h3>Post Title</h3>
                    <p>lorem ipsum</p>

                </div>



            </Card>
            
        </div>
    
    
   )

 }

export default BlogPost