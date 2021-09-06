 import SideBar from "../../sidebar/SideBar"
import "./single.css"
import SinglePost from "../../singlePost/SinglePost"

export default function Single() {
    return (
        <div className="single">
             <SinglePost/>
            <SideBar/> 
            
        </div>
    )
}
