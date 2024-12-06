import "./profile.css"
import {Link} from 'react-router-dom'
function Profile({user}) {
    
    return (
        <section className="profile-sec">
            <div className="container profile-container ">
            <p className="text-light text-center">*Profile update features under maintenance.currently not working.*</p>
                <div className="row">
                    <div className="profile-img col-md-4 py-3">
                            <img src={user && user.avatar.url} alt="..loading" />
                            <button className="avatar-btn mt-lg-5">Edit Avatar</button>
                    </div>
                    <div className="profile-detail  col-md-8">
                        <div className="detail">
                           <h1 >{user && user.name}</h1>
                        <p>
                            id: <span>{user && user._id}</span>
                        </p>
                        <p>
                            Email : <span>{user && user.email}</span>
                        </p> 
                        <button className="edit-info-btn ">Edit Info</button>
                        <div class="modal-dialog modal-dialog-centered">
</div>
                        </div>
                    </div>
                    <div className="settings col-12 p-2">
                        <Link className="setting-btn">Change Password</Link>|
                        <Link className="setting-btn">Remove Account</Link>|
                        <Link to={"/logout"} className="setting-btn">Logout</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Profile