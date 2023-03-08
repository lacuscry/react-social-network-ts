import c from "./MyPostList.module.css";
import {ProfileType} from "../../../../store/store";
import {FC} from "react";
import LikeButton from "./LikeButton/LikeButton";


type MyPostListType = {
    profile: ProfileType;
}


const MyPostList: FC<MyPostListType> = ({profile}) => {
    const postList = profile.posts.map(post => {
        return (
            <li key={post.id} className={c.post}>
                <div className={c.info}>
                    <div className={c.avatar_ibg}>
                        <img src={profile.info.avatar} alt={`${profile.info.name}'s avatar`}/>
                    </div>
                    <div className={c.name}>{profile.info.name}</div>
                    <div className={c.online}>{profile.info.online}</div>
                </div>
                <div className={c.content}>
                    {post.file && <div className={c.image_ibg}>
                                    <img src={post.file} alt={`${profile.info.name}'s image`}/>
                                </div>
                    }
                    <div className={c.text}>{post.text}</div>
                </div>
                <div className={c.statistic}>
                    <div className={c.date}>{post.date}</div>
                    <div className={c.buttons}>
                        <div className={c.row}>
                            <LikeButton likes={post.likes}/>
                            <button className={c.comments}>
                                <svg width="48" height="42" viewBox="0 0 48 42" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 41.414V32H3C1.346 32 0 30.654 0 29V3C0 1.346 1.346 0 3 0H45C46.654 0 48 1.346 48 3V29C48 30.654 46.654 32 45 32H15.414L6 41.414ZM3 2C2.448 2 2 2.448 2 3V29C2 29.552 2.448 30 3 30H8V36.586L14.586 30H45C45.552 30 46 29.552 46 29V3C46 2.448 45.552 2 45 2H3Z"
                                        fill="var(--bg-color)"/>
                                    <path
                                        d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
                                        fill="var(--bg-color)"/>
                                    <path
                                        d="M32 18C33.1046 18 34 17.1046 34 16C34 14.8954 33.1046 14 32 14C30.8954 14 30 14.8954 30 16C30 17.1046 30.8954 18 32 18Z"
                                        fill="var(--bg-color)"/>
                                    <path
                                        d="M24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z"
                                        fill="var(--bg-color)"/>
                                </svg>
                                <span>{post.comments}</span>
                            </button>
                            <div className={c.views}>
                                <svg width="50" height="28" viewBox="0 0 50 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M25 28C38.036 28 48.352 15.167 48.784 14.621L49.275 14L48.784 13.379C48.352 12.833 38.036 0 25 0C11.964 0 1.64801 12.833 1.21601 13.379L0.725006 14L1.21601 14.621C1.64801 15.167 11.964 28 25 28ZM25 2C35.494 2 44.47 11.46 46.69 14C44.473 16.542 35.509 26 25 26C14.506 26 5.53001 16.54 3.31001 14C5.52701 11.458 14.491 2 25 2Z"
                                        fill="var(--bg-color)"/>
                                    <path
                                        d="M25 23C29.963 23 34 18.962 34 14C34 9.038 29.963 5 25 5C20.037 5 16 9.038 16 14C16 18.962 20.037 23 25 23ZM25 7C28.859 7 32 10.14 32 14C32 17.86 28.859 21 25 21C21.141 21 18 17.86 18 14C18 10.14 21.141 7 25 7Z"
                                        fill="var(--bg-color)"/>
                                </svg>
                                <span>{post.views}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <ul className={c.list}>
            {postList}
        </ul>
    );
}


export default MyPostList;