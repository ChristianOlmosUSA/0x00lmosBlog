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
                    <span>About Me</span>
                   
                </div>
                <div className="profileImageContainer">
                        <img src={require('../../blogPostImages/Chris_family_selfie.jpg')} alt="selfie image"  />
                        
                    </div>
                <div className="cardBody">
                  <p className="personalBio">  I'm Christian Olmos and all this text is about me and about me and about me</p>  
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