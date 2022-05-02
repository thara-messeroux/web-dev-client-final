import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProfileComponent from "./EditProfileComponent";

const profileInf = (state) => state.ProfileInfo;

const ProfileComponent = () => {
    const [isEdit, setEdit] = useState(false);
    const theInfo = useSelector(profileInf);

    const editProfileClickHandler = () => {
        setEdit(!isEdit);
    }
    if (isEdit) {
        return(
            <EditProfileComponent isEdit={isEdit}/>
        )
    } else {
        return(
            <div>
                {isEdit}
                <div className="row">
                    <div className="col-1 align-self-center me-4 ms-3">
                        <span><i className="fas fa-arrow-left"></i></span>
                    </div>
                    <div className="col">
                        <div className="row fw-bolder h5 mb-0">
                            {theInfo.firstName + " " + theInfo.lastName}
                            
                        </div>
                        <div className="row text-muted">
                            {theInfo.numTuits} Tuits
                        </div>
                    </div>
                </div>
                <div className="row mt-2 pro-pics">
                    <img className="banner-pic img-prof" src={theInfo.profilePicture}></img>
                    {/* <img className="avatar-pic story-img" src={theInfo.profilePicture}></img> */}
                    
                </div>

                <button onClick={editProfileClickHandler}
                type="button" 
                className="btn border border-secondary rounded-pill mt-2 fw-bolder text-black edit-prof-btn">Edit Profile</button>

                <div className="row mt-5 pt-3 ms-2 fw-bolder h5 mb-0">
                    {theInfo.firstName + " " + theInfo.lastName}
                </div>
                <div className="row ms-2 text-muted pt-0">
                    @{theInfo.handle}
                </div>
                <div className="row ms-2">
                    {theInfo.bio}
                </div>
                <div className="d-flex ms-2 text-muted">
                    <span className="me-3"><i className="fas fa-map-marker-alt me-1"></i>{theInfo.location}</span>
                    <span className="me-3"><i className="fas fa-birthday-cake me-1"></i>Born {theInfo.dateOfBirth}</span>
                    <span className="me-3"><i className="fas fa-calendar-alt me-1"></i>Joined {theInfo.dateJoined}</span>
                </div>
                <div className="d-flex ms-2">
                    <span className="me-3 fw-bolder"> {theInfo.followingCount} <span className="text-muted fw-normal">Following</span></span>
                    <span className="fw-bolder">{theInfo.followersCount} <span className="text-muted fw-normal">Followers</span></span>
                </div>
            </div>

        )}
}

export default ProfileComponent;