import React, {useState, useEffect} from 'react'; 
import './style.css';
import Card from '../UI/Card';
import data from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

                                         

    useEffect(()=>{
        const postId = props.match.params.postId;           /*console.log(props); 1.19.47 && 1.21.30 */
        console.log(data);
    })


  return(
    
        <div className="blogPostContainer">
            <Card width="100%">
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful Statement 42</h1>
                    <span className="postedBy">posted on July 2019</span>           {/* executes before or after lifcycle */}
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