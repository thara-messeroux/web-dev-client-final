import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const WhatsHappening = ({user}) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchedUser, setSearchedUser] = useState({});

	useEffect(() => {
		// getting the user data from localstorage after 5 seconds
		const timer = setTimeout(() => {
			const user = localStorage.getItem("user");
			if(user){
				setSearchedUser(JSON.parse(user));
			}
		}, 3000);
		return () => clearTimeout(timer);
	}, []);		

	async function fetchUser() {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
				'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
			}
		};
		
		fetch('https://twitter32.p.rapidapi.com/getProfile?username=' + searchValue, options)
			.then(response => response.json())
			.then(response => {
					console.log(response)
					localStorage.setItem('searcheduser', searchValue);
					// saving the response in localstorage when the response has come back from the api otherwise setting null
					Object.keys(response).length > 0 ? 
					localStorage.setItem("user", JSON.stringify(response))
					: localStorage.setItem("user", null);
					setSearchedUser(response)
				})
			.catch(err => console.error(err));
	}

	return (
		<div className="pt-4">
			<form onSubmit={(e) => {e.preventDefault();fetchUser()}} className="mb-2">
				<input type="text" className="form-control mb-2" placeholder="Search user" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
				<input type="submit" className="btn btn-primary" value="Search"/>
			</form>

		   {/* showing the fetched data */}
			{ Object.keys(searchedUser).length > 0 &&
				<div className="card mb-2">
					<div className="card-body">
						<div className="d-flex mb-2">
							<div className="tuit-avatar-wrapper me-2">
								<img src={searchedUser?.data?.user_info?.profile_image_url_https} alt="avatar" className="tuit-avatar img-fluid rounded-circle" />
							</div>
							<Link to={""+searchedUser.data.id} className="text-decoration-none">
								<div className="tuit-content-header align-items-center">
									<span className="tuit-author d-block ms-2 text-black">{searchedUser?.data?.user_info?.name}</span>
									<span className="tuit-author-handle me-2 d-block text-black">@{searchedUser?.data?.user_info?.screen_name}</span>
								</div>
							</Link>
						</div>
						<div className="tuit-content-wrapper mb-2">
							<div className="tuit-content">
								<div className="tuit-content-body">
									<p className="m-0 p-0">{searchedUser?.data?.user_info?.followers_count} followers</p>
									<p className="m-0 p-0">{searchedUser?.data?.user_info?.description}</p>
									<p className="m-0 p-0">{searchedUser?.data?.user_info?.location}</p>
								</div>
							</div>
						</div>
						<Link to={""+searchedUser?.data?.id} className="text-decoration-none btn btn-primary">
							See more
						</Link>
					</div>
				</div>
			}
		</div>
	)
}

export default WhatsHappening;