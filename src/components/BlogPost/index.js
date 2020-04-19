import React, {useState, useEffect} from 'react'; 
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
     const [post, setPost] = useState({

        id:"",                          /*  Solved the error [Error: Cannot find module './undefined']  by putting the json variables in here    */
        blogCategory:"",
        blogTitle:"",
        slug:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:"",



     });   
     const[postId,setPostId] = useState('');        {/* re-render if changes*/}
                                 
    useEffect(()=>{
       const postId = props.match.params.postId;           /*console.log(props); 1.19.47 && 1.21.30 */       /* const post = blogPost.data.find(post=>post.id === postId);         /* render what ever elements get matched to post.id, return blogPost*/
       const post = blogPost.data.find((ele) => ele.id === parseInt(postId)); {/* original: const post = blogPost.data.find(post=>post.id == postId);   */}
       setPost(post);
       setPostId(postId)
        
    }, [post, props.match.params.postId]);

    if(post.blogImage == "")return null             /* solving error if a json item is blank */


  return(
    
        <div className="blogPostContainer">
            <Card width="100%">
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle"> {post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>           {/* executes before or after lifcycle */}
                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/' + post.blogImage)}alt="Post image" />
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>

                </div>



            </Card>
            
        </div>
    
    
   )

 }

export default BlogPost