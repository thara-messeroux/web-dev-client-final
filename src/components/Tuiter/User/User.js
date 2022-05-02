import { useNavigate } from "react-router-dom";

const User = ({user, profile}) => {
	console.log("profile is ",profile);
	const navigate = useNavigate();

	function editUser(e){
		e.preventDefault();
		// asking the user to enter the new username
		const newUsername = window.prompt("Enter new username");

		// if the user enters a new username
		if(newUsername){
			const userId = localStorage.getItem('_id');
			const url = `https://web-dev-server-final.herokuapp.com/api/edituser/${userId}`;
			const data = {
				username: newUsername
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
				console.log("data is ", data);
				alert("User updated successfully! Please login again");
				// logging out the user
				localStorage.setItem('username', data.username);
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
									  <img src={profile && profile.data.user_info.profile_image_url_https} alt="avatar" className="user-avatar-img img-fluid rounded-circle" />
									  <button className="btn btn-primary btn-sm" onClick={editUser}>Edit Profile</button>
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
							  </div>    
						  }
					  </div>
				  </div>
			  </div>
		  </div>
	
	)
}

export default User