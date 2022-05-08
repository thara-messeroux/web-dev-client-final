import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const User = ({user, profile}) => {

	const [userProfile, setUserProfile] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		const userId = localStorage.getItem('_id');
		// getting data from /api/user/:id
		const url = `https://web-dev-server-final.herokuapp.com/api/user/${userId}`;
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(response => {
			console.log("user is ", response);
			setUserProfile(response);
		})
	}, [])

	function editUser(e){
		e.preventDefault();
		// asking the user to enter the new username
		const newUsername = window.prompt("Enter new username");
		const newEmail = window.prompt("Enter new email");
		const newPhone = window.prompt("Enter new phone number");
		const newDOB = window.prompt("Enter new date of birth");
		const newCollege = window.prompt("Enter new college");

		// if the user enters a new username
		if(newUsername || newEmail || newPhone || newDOB || newCollege){
			const userId = localStorage.getItem('_id');
			const url = `https://web-dev-server-final.herokuapp.com/api/edituser/${userId}`;
			const data = {
				username: newUsername,
				email: newEmail,
				phone: newPhone,
				dob: newDOB,
				college: newCollege
			};

			// fetching the new username
			fetch(url, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then(res => res.json())
			.then(data => {
				alert("User updated successfully! Please login again");
				// logging out the user
				localStorage.clear();
				navigate('/');
			})
			.catch(err => console.log(err));
		}
	}

	return (
	  <div>
		  <div>
			  <div className="card">
				  <div className="card-body">
						  {Object.keys(profile).length > 0 &&
							  <div className="d-flex flex-column">
								  <div className="d-flex justify-content-between user-avatar-wrapper me-2">
									  <img src={profile && profile.data.user_info.profile_image_url_https} alt="avatar" className="user-avatar-img rounded-circle" style={{width: "150px", height: "150px"}} />
									  <div className="d-flex flex-column">
										  {
											  Object.keys(userProfile).length > 0 && 
											  <div>
												  <span className="mb-2 d-block fw-bolder">Email: {userProfile.user.email}</span>
												  <span className="mb-2 d-block fw-bolder">Phone: {userProfile.user.phone}</span>
												  <span className="mb-2 d-block fw-bolder">DOB: {userProfile.user.dob}</span>
												  <span className="mb-2 d-block fw-bolder">College: {userProfile.user.college}</span>
											  <p>{console.log("profile is", profile)}</p>

											  </div>
										  }
										  <button className="btn btn-primary btn-sm" onClick={editUser}>Edit Profile</button>
									  </div>
								  </div>
								  <div className="user-name">
									  <strong className="user-name-text fw-bolder">{profile && profile.data.user_info.name}</strong>
								  </div>
								  <div className="user-handle">
									  <span className="user-handle-text">@{profile && profile.data.user_info.screen_name}</span>
								  </div>
								  <div className="user-description">
									  <p className="user-description-text">{profile && profile.data.user_info.description}</p>
								  </div>
								  <div className="d-flex mb-2">
									  <div className="user-following me-4">
										  <Link to={"/following/"+ profile.data.id} className="text-decoration-none text-black">
									  		<span className="user-following-count fw-bolder me-2">{profile && profile.data.user_info.friends_count}</span>
										  	<span className="user-following-text">Following</span>
										  </Link>
									  </div>
									  <div className="user-followers">
										  <Link to={"/followers/" + profile.data.id} className="text-decoration-none text-black">
										  	<span className="user-followers-count fw-bolder me-2">{profile && profile.data.user_info.followers_count}</span>
										  	<span className="user-followers-text">Followers</span>
										  </Link>
										</div>
								</div>
								<div className="user-location">
									<span className="me-2"><i className="fas fa-map-marker-alt"></i></span>
									<span className="user-location-text">{profile && profile.data.user_info.location}</span>
								</div>
							  </div>    
						  }
					  </div>
				  </div>
			  </div>
		  </div>
	
	)
}

export default User