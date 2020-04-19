import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import sideBar from '../../components/SideBar';

const Home =props=> {

    const gallaryHeight= 450;
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow:'hidden'
    }

        const sideImageHeight = gallaryHeight/3;

        return (
            <div>
                <Card>
                    <div className="gallaryPost" style={gallaryStyle}>
                    <section style={{width: '70%'}}>
                        <div > 
                            <img src={"https://cdn.dribbble.com/users/991821/screenshots/2704993/_____.jpg"} alt="" />
                        </div>
                    </section>
                    <section className={"sideImageWrapper"} style={{width: '30%'}}>                        {/* 3 images at right side of home page */}
                        <div style={{height:`${sideImageHeight}px`}} > 
                            <img src={"https://cdn.dribbble.com/users/991821/screenshots/2704993/_____.jpg"} alt="" />
                        </div>
                        <div style={{height:`${sideImageHeight}px`}} >
                            <img src={"https://cdn.dribbble.com/users/991821/screenshots/2704993/_____.jpg"} alt="" />
                        </div>
                        <div style={{height:`${sideImageHeight}px`}} > 
                            <img src={"https://cdn.dribbble.com/users/991821/screenshots/2704993/_____.jpg"} alt="" />
                        </div>
                    </section>
                    </div>
                   
                </Card>

                <section className="HomeContainer">
                    <div style={{width:'70%'}}>
                        <Card style={{marginBottom:'20px'}}>
                            Post 1
                        </Card>
                   
                        <Card style={{marginBottom:'20px'}}>
                            Post 2
                        </Card>
                    </div>
                </section>

                <sideBar/>

            </div>

        );

}

export default Home;
