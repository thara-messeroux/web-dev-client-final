import React from "react";

const WhoToFollowListItem = ({
    
    who = {
        avatarIcon: './images/nasa.jpg',
        userName: 'NASA',
        handle: 'NASA',
    }
    
}) => {
    return (
    <div className="list-group-item border border-color-gray">
        <div className="d-flex flex-row justify-content-start">
            <div>
                <img className="avatar-images" src={who.avatarIcon} width="48"/>
            </div>
            <div className="ms-2 me-2 fw-bold">
                {who.userName} <span className="fas fa-check-circle"></span><br/>
                <div className="fw-normal">
                    @{who.handle}
                </div>
            </div>
            <div className="d-flex align-items-center ms-auto">
                <button className="btn btn-primary btn-block rounded-pill border-0">Follow</button>
            </div>
        </div>
    </div>
    );
}
export default WhoToFollowListItem;