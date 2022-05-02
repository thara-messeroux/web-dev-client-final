import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileComponent from "./ProfileComponent";

const profileInf = (state) => state.ProfileInfo;

const EditProfileComponent = ({ isEdit }) => {
    const [isCurrEdit, setEdit] = useState(isEdit);
    const [newProfile, setProfile] = useState({});

    const dispatch = useDispatch();

    const theInfo = useSelector(profileInf);

    const cancelBtnClickHandler = () => {
        setEdit(false);
    }

    const inputFormEventHandler = (event) => {
        if (event.target.id == "firstNameInput") {
            setProfile({...newProfile, firstName: event.target.value});
        } else if (event.target.id == "lastNameInput") {
            setProfile({...newProfile, lastName: event.target.value});
        } else if (event.target.id == "locationInput") {
            setProfile({...newProfile, location: event.target.value});
        } else if (event.target.id == "websiteInput") {
            setProfile({...newProfile, website: event.target.value});
        } else if (event.target.id == "dobInput") {
            setProfile({...newProfile, dateOfBirth: event.target.value});
        } else if (event.target.id == "bioInput") {
            setProfile({...newProfile, bio: event.target.value});
        }        
    }

    const saveBtnClickHandler = () => {
        const action = {
            type: 'update-profile',
            newProfile
        };
        dispatch(action);
        setEdit(!isCurrEdit);
    }

    if (!isCurrEdit) {
        return (<ProfileComponent />)
    } else {
        return (
            <div>
                <div className="row">
                    <div className="col-1 align-self-center me-3 ms-3">
                        <span><i onClick={cancelBtnClickHandler} className="fas fa-times"></i></span>
                    </div>
                    <div className="col">
                        <div className="row fw-bolder h5 mb-0">
                            <span className="d-flex align-items-center justify-content-between text-black"> Edit Profile
                                <button onClick={saveBtnClickHandler}
                                    className="btn rounded-pill fw-bolder text-black save-prof-btn">
                                    Save
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 pro-pics">
                    <img className="banner-pic lower-brightness" src={theInfo.bannerPicture}></img>
                    <span className="edit-banner-icons w-auto"><i className="fas fa-camera me-4"></i><i className="fas fa-times"></i></span>
                    <img className="avatar-pic lower-brightness" src={theInfo.profilePicture}></img>
                    <i className="fas fa-camera me-4 edit-prof-pic-icon w-auto"></i>
                </div>

                <div className="form-group ps-2 pe-2 pt-2 edit-prof-form">
                    <label htmlFor="firstNameInput">First Name</label>
                    <input onChange={inputFormEventHandler}
                        className="form-control mb-2 bg-black text-white"
                        type="text"
                        placeholder="First name..."
                        defaultValue={theInfo.firstName} id="firstNameInput"></input>
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input onChange={inputFormEventHandler}
                        className="form-control mb-2 bg-black text-white" type="text" placeholder="Last Name..." defaultValue={theInfo.lastName} id="lastNameInput"></input>
                    <label htmlFor="locationInput">Location</label>
                    <input onChange={inputFormEventHandler}
                        className="form-control mb-2 bg-black text-white" type="text" placeholder="Location..." defaultValue={theInfo.location} id="locationInput"></input>
                    <label htmlFor="websiteInput">Website</label>
                    <input onChange={inputFormEventHandler}
                        className="form-control mb-2 bg-black text-white" type="text" placeholder="Website..." defaultValue={theInfo.website} id="websiteInput"></input>
                    <label htmlFor="dobInput">Date of Birth</label>
                    <input onChange={inputFormEventHandler}
                        className="form-control mb-2 bg-black text-white" type="text" placeholder="Birthday..." defaultValue={theInfo.dateOfBirth} id="dobInput"></input>
                    <label htmlFor="bioInput">Bio</label>
                    <textarea onChange={inputFormEventHandler}
                        className="form-control mb-2 bg-black text-white" type="text" placeholder="Bio..." defaultValue={theInfo.bio} id="bioInput"></textarea>
                </div>
            </div>
        )
    }
}

export default EditProfileComponent;