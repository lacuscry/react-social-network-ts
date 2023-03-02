import c from "./Profile.module.css";
import {ProfileType} from "../../store/store";
import MyInfo from "./MyInfo/MyInfo";
import MyPosts from "./MyPosts/MyPosts";


type ProfileProps = {
    profile: ProfileType
}


function Profile({profile}: ProfileProps) {
    return (
        <section className={c.profile}>
            <MyInfo info={profile.info}/>
            <MyPosts profile={profile}/>
        </section>
    );
}


export default Profile;