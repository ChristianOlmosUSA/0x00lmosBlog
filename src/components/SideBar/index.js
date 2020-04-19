import React, {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'

/** https://youtu.be/JE8w1gvn0Y4?t=3567
* @author
* @function SideBar
**/

const SideBar = (props) => {

    const [posts, setPosts] = useState([]); 

    useEffect(()=>{             
       const posts = blogPost.data;     {/* un reel the whole json*/}
       setPosts(posts);
    },[posts]);


  return(
      <div className="sidebarContainer">
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                   
                </div>
                <div className="profileImageContainer">
                        <img src="https://c1.staticflickr.com/5/4091/5194856335_a80059533c_b.jpg"></img>
                    </div>
                <div className="cardBody">
                  <p className="personalBio">  my name is Rower, and I like to row ,my name is Rower,my name is Rower,my name is Rower,my name is Rower,my name is Rower,</p>  
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Networks</span>
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span> Recent Posts</span>
                </div>
                <div className="recentPosts">

                    {
                    posts.map(post=>{               {/* here we map the json out into our sidebar as quick links*/}
                        return(
                            <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                </div>
                            </NavLink>

                        );
                    })

                    }
                   
                </div>
            </Card>
      </div>
   )
 }

export default SideBar