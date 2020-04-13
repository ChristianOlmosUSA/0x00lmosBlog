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
            <Card width="70%">
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful is always Beautiful Statement</h1>
                    <span className="postedBy">posted on July 2019</span>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/memories-from.jpg' )}alt="Post image" />

                </div>
            </Card>
            
        </div>
    
    
   )

 }

export default BlogPost