import "./home.css"
import Header from "../../header/Header";
import Posts from "../../post/Post";
import SideBar from "../../sidebar/SideBar"

export default function Home() {
    return (
        <>
        
            <Header/>
            <div className="home">
                <Posts/>
                <SideBar/>
            </div>
            
        </>
    );
}
