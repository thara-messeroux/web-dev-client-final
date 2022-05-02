import React from "react";



const PostSummaryItem = ({
    post = {
        topic: "Web Development", 
        userName: "ReactJS", 
        time: "2h", 
        title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs", 
        image: "./images/reactjs.png"
    }
}) => {
    return(
    <div className="list-group-item d-flex justify-content-between">
        <div className="d-flex flex-column">
            <div className="text-muted">
                {post.topic}
            </div>
            <div className="fw-bold me-1">
                {post.userName} 
                <i className="fas fa-check-circle"></i>
                <span className="text-muted fw-normal"> - {post.time}</span>
                
            </div>
            <div className="fw-bold">
                {post.title}
            </div>
        </div>
        <img className="img-fluid story-images flex-grow-1" src={post.image}/>
    </div>



    
    );
}
export default PostSummaryItem;