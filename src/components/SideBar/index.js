import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
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
                  <p className="personalBio">  my name is Rower, my name is Rower,my name is Rower,my name is Rower,my name is Rower,my name is Rower,my name is Rower,</p>  
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
                    <div className="recentPost">
                        <h3 className="recentPostTitle">Post Title</h3>
                        <span>March 2020</span>

                    </div>
                </div>
            </Card>
      </div>
   )
 }

export default SideBar