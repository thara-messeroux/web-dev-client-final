import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {createTuit, deleteTuit, updateTuit} from "../actions/tuits-actions";
// import TuitStats from "./TuitStats";

const TuitListItem = ({ tuit }) => {
	const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
	const dispatch = useDispatch();

	return (
			<>
				<div className="wd-tuit-bookmarks">
					<div className="wd-tuit wd-content">
						<button onClick={() =>
								createTuit(dispatch, newTuit)}
										className="btn btn-primary float-end">
							Tuit
						</button>
						<textarea className="form-control w-75"
											onChange={(e) =>
													setNewTuit({...newTuit,
														tuit: e.target.value})}></textarea>
						<img className="wd-tuit-profile-img"
								 src={tuit.logoImage}/>
						<div className="wd-tuit-content">
							<div className="wd-tuit-account-container">
								<div className="wd-tuit-account">
									<div className="wd-tuit-username">{tuit.userName}</div>
									{tuit.verified ? <span className="fa-stack fa-1x">
																		<i className="fas fa-certificate fa-stack-1x"/>
																		<i className="fas fa-check fa-stack-1x"/>
																</span> : '\u00a0'}
									<div className="wd-tuit-details">@{tuit.handle} {"\u16EB"} {tuit.time}</div>
								</div>
								<div className="wd-tuit-options">
									<i className="fas fa-remove float-end"
										 onClick={() => deleteTuit(
												 dispatch, tuit)}></i>
								</div>
							</div>
							<div>
							Likes: {tuit.likes}
							<i onClick={() => updateTuit(dispatch, {
								...tuit,
								likes: tuit.likes + 1
							})} className="far fa-thumbs-up ms-2"></i>
						</div>
							<div className="wd-tuit-post">
								{tuit.tuit}
							</div>
							{
								tuit.attachments && tuit.attachments.image &&
								<img src={tuit.attachments.image}
										 className="mt-2 wd-border-radius-30px"
										 style={{ width: "100%", borderRadius: "30px" }}/>
							}
							{
								tuit.attachments && tuit.attachments.video &&
								<iframe width="100%" height="350px"
												className="mt-2 wd-border-radius-30px"
												style={{ width: "100%", borderRadius: "30px" }}
												src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
												title="YouTube video player" frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen/>
							}
							{/* <TuitStats tuit={tuit}/> */}
						</div>
					</div>
				</div>
			</>
	);
};
export default TuitListItem;
