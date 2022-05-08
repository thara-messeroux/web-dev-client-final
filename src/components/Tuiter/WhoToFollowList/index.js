import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WhoToFollowList = (loggedInUser) => {
	const navigate = useNavigate();
	const [userProfile, setUserProfile] = useState({});
	function logout(){
		localStorage.clear();
		navigate('/');
	}

	async function deleteUser(){

		// asking for confirmation
		if(window.confirm("Are you sure you want to delete your account?")){
			const id = localStorage.getItem('_id');
			const response = await fetch(`https://web-dev-server-final.herokuapp.com/api/user/${id}`, {
				method: 'DELETE',
				headers: {
					'content-type': 'application/json'
				}
			});
			const data = await response.json();
			console.log("data is ", data);
			alert("User deleted successfully");
			navigate('/');
		} else{
			alert("User not deleted");
		}
	}

	return(
		// showing the div only if user is logged in
		<div className="">
			<input type="submit" value="Logout" onClick={logout} className="btn btn-primary d-block mb-2"/>
			<button type="submit" onClick={deleteUser} className="btn btn-primary d-block" style={{"fontSize": "14px"}}>
				{/* delete font awesome icon */}
				<span className="me-2 d-lg-none"><i className="fa fa-trash"></i></span>
				<span className="d-none d-lg-block">Delete account</span>
			</button>
		</div>
	);
}
export default WhoToFollowList;