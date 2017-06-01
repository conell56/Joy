import React from 'react';

export default class ProfileHeader extends React.Component {

	render() {
		return (
			<div className="row user-header p-y-2">
	      <div className="col-md-offset-2 col-md-8 p-y-4">
	        <div className="media">
            <div className="media-left">
              <a href="#">
                <img
									className="media-object"
									src="https://process.filestackapi.com/u2Lc8VPQ3yToFBYNFRTW"
									alt="profile-pic"
								/>
              </a>
            </div>
            <div className="media-body p-l-6">
              <h2 className="media-heading m-t-15">Christopher Conell</h2>
              <h4><strong>Wedding Planner</strong></h4>
              <ul className="header-ul">
                <li><strong>12</strong> posts</li>
                <li><strong>550k</strong> followers</li>
                <li><strong>10k</strong> following</li>
              </ul>
            </div>
          </div>
        </div>
	    </div>
		);
	}
}