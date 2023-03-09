import c from "./MyPosts.module.css";
import {FC} from "react";
import {ProfileType} from "../../../store/store";
import MyPostList from "./MyPostList/MyPostList";
import FormContent from "../../common/FormContent/FormContent";


type MyPostsType = {
    profile: ProfileType;
}


const MyPosts: FC<MyPostsType> = ({profile}) => {
    return (
        <div className={c.posts}>
            <FormContent inputText="Share something" btnText="Post"/>
            <h2 className={c.title}>My posts</h2>
            <MyPostList profile={profile}/>
        </div>
    );
}


export default MyPosts;
