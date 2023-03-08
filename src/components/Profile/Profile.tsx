import c from "./Profile.module.css";
import {ProfileType} from "../../store/store";
import MyInfo from "./MyInfo/MyInfo";
import MyPosts from "./MyPosts/MyPosts";
import {FC} from "react";


type ProfileProps = {
    profile: ProfileType
}


const Profile: FC<ProfileProps> = ({profile}) => {
    return (
        <section className={c.profile}>
            <MyInfo info={profile.info}/>
            <MyPosts profile={profile}/>
        </section>
    );
}


export default Profile;