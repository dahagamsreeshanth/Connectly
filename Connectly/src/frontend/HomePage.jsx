 import React from 'react';
 import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
   
    return (<>
    <h2 style={{alignItems:"center"}}>Welcome to Connectly,Connect with your friends with connectly</h2>

    <div className="container"style={{marginTop:"100px"}}>
        <div className="row"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WVSIn2IN-vYOFQWd3YV9R9zJRFwg1n2mHFcv6Hd5kg&s=10" alt="Connectly" style={{width:"80%",height:"100%"}} className="col mt-5"/>
         
         <div className="col">
            <div className="row" style={{marginTop:"100px"}}>     
         <button className="row btn" style={{width:"300px",height:"60px",marginLeft:"200px",backgroundColor:"red"}}>
            <Link to="/register">Register</Link></button>
         </div>
         <div className="row " >
         <button className="row btn mt-5 " style={{width:"300px",height:"60px",marginLeft:"200px",backgroundColor:"lightblue"}}> 
            <Link to="/login">Login</Link></button>
         </div>
    </div>
    </div>
     </div>

    </>)
}
 