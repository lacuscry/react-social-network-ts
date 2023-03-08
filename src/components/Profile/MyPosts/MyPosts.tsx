import c from "./MyPosts.module.css";
import {ProfileType} from "../../../store/store";
import MyPostsForm from "./MyPostsForm/MyPostsForm";
import MyPostList from "./MyPostList/MyPostList";
import {FC} from "react";


type MyPostsType = {
    profile: ProfileType;
}


const MyPosts: FC<MyPostsType> = ({profile}) => {
    return (
        <div className={c.posts}>
            <MyPostsForm/>
            <h2 className={c.title}>My posts</h2>
            <MyPostList profile={profile}/>
        </div>
    );
}


export default MyPosts;
