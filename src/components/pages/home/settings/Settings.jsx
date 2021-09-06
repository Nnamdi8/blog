import SideBar from "../../../sidebar/SideBar";
import "./settings.css";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                         src="https://everfabulous.weebly.com/uploads/1/2/5/1/125115117/126039232.jpg" alt="" />
                         <label htmlFor="fileInput">
                         <i className="settingsPPIcon fas fa-user"></i>
                         </label>
                         <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="safac"/>
                    <label>Email</label>
                    <input type="text" placeholder="safac@gmail.com"/>
                    <label>Password</label>
                    <input type="Password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
