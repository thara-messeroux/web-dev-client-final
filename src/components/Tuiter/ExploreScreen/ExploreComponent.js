import React from "react";
import PostSummaryList from "../PostSummaryList"

const ExploreComponent = () => {
    return(
        <>
            <div className="d-flex flex-row">
                <div className="d-flex search-bar-group d-inline position-relative flex-grow-1">
                    <span className="fa fa-search position-absolute"></span>
                    <input type="text" className="form-control search-input me-4" placeholder="Search Tuiter" />
                </div>
                <div className="d-flex align-items-center justify-content-end ms-auto">
                    <a href="explore-settings.html">
                        <i className="fas fa-cog cog-icon"></i>
                    </a>               
                </div>
            </div>

            <div className="mt-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li>
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li>
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li>
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="d-none d-md-block">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div className="mt-2 position-relative">
                <img className="img-fluid" src="./images/spacexship.jpg"/>
                <span className="h2 image-text-overlay position-absolute fw-bold">SpaceX's Starship</span>
            </div>

            <div className="list-group mb-3">
                <PostSummaryList/>
            </div>
        </>
    );
}

export default ExploreComponent;