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
            <Card style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                    <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEhwac3_zELYg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=Ot1QYURn8xf9zWE5dbC8zfblGzDLdw2QmLYQ-xGnFG8"></img>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="cardHeader">
                    <span>Social Networks</span>
                </div>
            </Card>
      </div>
   )
 }

export default SideBar