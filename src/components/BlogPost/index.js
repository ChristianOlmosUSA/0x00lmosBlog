import React, {useState, useEffect} from 'react'; 
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
     const [post, setPost] = useState({});   
     const[postId,setPostId] = useState('');
                                 
    useEffect(()=>{
       const postId = props.match.params.postId;           /*console.log(props); 1.19.47 && 1.21.30 */       /* const post = blogPost.data.find(post=>post.id === postId);         /* render what ever elements get matched to post.id, return blogPost*/
       const post = blogPost.data.find((ele) => ele.id === parseInt(postId)); 
       setPost(post);
       setPostId(postId)
        
    }, [post, props.match.params.postId]);


  return(
    
        <div className="blogPostContainer">
            <Card width="100%">
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle"> {post.blogTitle}</h1>
                    <span className="postedBy">mio</span>           {/* executes before or after lifcycle */}
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