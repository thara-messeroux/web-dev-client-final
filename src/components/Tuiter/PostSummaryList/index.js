import React from "react";

import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = ({title}) => {
    return(
        <div className='list-group'>
            {
                title &&
                <li className="list-group-item">
                    <h5 className="fw-bolder">{title}</h5>
                </li>
            }
            {
                post.map(post => {
                    return (
                        <PostSummaryItem post={post} />
                    );
                })
            }
        </div>
    );
}

export default PostSummaryList;