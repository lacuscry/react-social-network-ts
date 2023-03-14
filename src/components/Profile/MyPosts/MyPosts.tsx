import c from "./MyPosts.module.css";
import {FC, useState} from "react";
import {v1} from "uuid";
import {ProfilePostsType, ProfileType} from "../../../store/store";
import MyPostList from "./MyPostList/MyPostList";
import FormContent from "../../common/FormContent/FormContent";


type MyPostsType = {
    profile: ProfileType;
}


const MyPosts: FC<MyPostsType> = ({profile}) => {
    const [posts, setPost] = useState<ProfilePostsType[]>(profile.posts);


    const setPostHandler = (text: string) => {
        const date = new Date();

        const month = date.getMonth() > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
        const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
        const year = date.getFullYear();

        setPost([...posts, {
            id: v1(),
            text,
            file: "",
            date: `${month}.${day}.${year}`,
            likes: 0,
            comments: 0,
            views: "1"
        }]);
    };


    return (
        <div className={c.posts}>
            <FormContent setArrayHandler={setPostHandler} inputText="Share something" btnText="Post" errorText="Fill post"/>
            <h2 className={c.title}>My posts</h2>
            <MyPostList info={profile.info} posts={posts}/>
        </div>
    );
};


export default MyPosts;
