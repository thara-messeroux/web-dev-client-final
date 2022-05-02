import { useEffect, useState } from "react";


const WhatsHappening = ({user}) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchedUser, setSearchedUser] = useState({});

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
                                <img src={searchedUser.data.user_info.profile_image_url_https} alt="avatar" className="tuit-avatar img-fluid rounded-circle" />
                            </div>
                            <div className="tuit-content-header align-items-center">
                                <span className="tuit-author d-block ms-2">{searchedUser.data.user_info.name}</span>
                                <span className="tuit-author-handle me-2 d-block">@{searchedUser.data.user_info.screen_name}</span>
                            </div>
                        </div>
                        <div className="tuit-content-wrapper">
                            <div className="tuit-content">
                                <div className="tuit-content-body">
                                    <p className="m-0 p-0">{searchedUser.data.user_info.followers_count} followers</p>
                                    <p className="m-0 p-0">{searchedUser.data.user_info.description}</p>
                                    <p className="m-0 p-0">{searchedUser.data.user_info.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default WhatsHappening;