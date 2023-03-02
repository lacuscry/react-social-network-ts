import c from "./MyPostList.module.css";
import {ProfileType} from "../../../../store/store";


type MyPostListType = {
    profile: ProfileType;
}


function MyPostList({profile}: MyPostListType) {
    const postList = profile.posts.map(post => {
        return (
            <li key={post.id} className={c.post}>
                <div className={c.info}>
                    <div className={c.avatar_ibg}>
                        <img src={profile.info.avatar}/>
                    </div>
                    <div className={c.name}>{profile.info.name}</div>
                    <div className={c.online}>{profile.info.online}</div>
                </div>
                <div className={c.content}>
                    {post.file ?
                        <div className={c.image_ibg}>
                            <img src={post.file}/>
                        </div> : ""
                    }
                    <div className={c.text}>{post.text}</div>
                </div>
                <div className={c.statistic}>
                    <div className={c.date}>{post.date}</div>
                    <div className={c.buttons}>
                        <div className={c.row}>
                            <button className={c.likes}>
                                <svg width="30" height="26" viewBox="0 0 30 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.9508 25.4304C14.5553 25.4314 14.1635 25.3541 13.7979 25.2031C13.4324 25.0521 13.1003 24.8303 12.8208 24.5504L2.52079 14.2504C1.70713 13.4279 1.06528 12.4517 0.632638 11.3787C0.199995 10.3057 -0.0147917 9.15727 0.000791025 8.00041C0.00863074 6.94025 0.22555 5.89205 0.639123 4.91585C1.0527 3.93966 1.6548 3.05465 2.41094 2.31151C3.16708 1.56837 4.0624 0.981714 5.04563 0.585137C6.02885 0.18856 7.08065 -0.0101431 8.14079 0.000408903C9.2199 -0.0104609 10.2902 0.195485 11.2882 0.606032C12.2863 1.01658 13.1917 1.62337 13.9508 2.39041L14.9508 3.39041L15.7708 2.57041C17.1867 1.11698 19.0814 0.225922 21.1039 0.0622833C23.1264 -0.101355 25.1396 0.473512 26.7708 1.68041C27.6993 2.39546 28.4648 3.30013 29.0164 4.33417C29.5679 5.36821 29.8928 6.5079 29.9695 7.67733C30.0461 8.84676 29.8727 10.0191 29.4608 11.1163C29.049 12.2135 28.408 13.2103 27.5808 14.0404L17.0808 24.5504C16.8013 24.8303 16.4692 25.0521 16.1037 25.2031C15.7381 25.3541 15.3463 25.4314 14.9508 25.4304ZM8.10079 1.99041C6.51131 1.98879 4.98355 2.60563 3.84079 3.71041C3.25819 4.27095 2.79488 4.94346 2.47869 5.68754C2.1625 6.43162 1.99994 7.23193 2.00079 8.04041C1.99203 8.92972 2.15988 9.81193 2.49461 10.6359C2.82934 11.4598 3.3243 12.2092 3.95079 12.8404L14.2508 23.1404C14.3438 23.2341 14.4544 23.3085 14.5762 23.3593C14.6981 23.4101 14.8288 23.4362 14.9608 23.4362C15.0928 23.4362 15.2235 23.4101 15.3454 23.3593C15.4672 23.3085 15.5778 23.2341 15.6708 23.1404L26.1808 12.6204C26.7977 11.9904 27.2744 11.2371 27.5794 10.4098C27.8845 9.58253 28.011 8.70008 27.9508 7.82041C27.8974 6.93172 27.6526 6.06507 27.2332 5.27976C26.8138 4.49445 26.2297 3.80903 25.5208 3.27041C24.2769 2.3533 22.7421 1.91966 21.2022 2.05029C19.6623 2.18091 18.2224 2.86689 17.1508 3.98041L15.6608 5.51041C15.5678 5.60414 15.4572 5.67853 15.3354 5.7293C15.2135 5.78007 15.0828 5.80621 14.9508 5.80621C14.8188 5.80621 14.6881 5.78007 14.5662 5.7293C14.4444 5.67853 14.3338 5.60414 14.2408 5.51041L12.5408 3.81041C11.3699 2.64969 9.7895 1.99598 8.14079 1.99041H8.10079Z"
                                        fill="var(--bg-color)"/>
                                </svg>
                                <span>{post.likes}</span>
                            </button>
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