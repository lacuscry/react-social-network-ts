import c from "./MyPosts.module.css";
import {ProfileType} from "../../../store/store";
import MyPostsForm from "./MyPostsForm/MyPostsForm";
import MyPostList from "./MyPostList/MyPostList";


type MyPostsType = {
    profile: ProfileType;
}


function MyPosts(props: MyPostsType) {
    return (
        <div className={c.posts}>
            <MyPostsForm/>
            <h2 className={c.title}>My posts</h2>
            <MyPostList profile={props.profile}/>
        </div>
    );
}


export default MyPosts;
