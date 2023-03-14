import {v1} from "uuid";

type StoreType = {
    sidebar: SidebarType
    profilePage: ProfileType
    dialogsPage: DialogsPageType
}

export type ProfileType = {
    path: string
    info: ProfileInfoType
    posts: ProfilePostsType[]
}

export type ProfileInfoType = {
    id: number
    name: string
    city: string
    age: number
    job: string
    avatar: string
    bg: string
    online: string
}

export type ProfilePostsType = {
    id: string
    text: string
    file: string
    date: string
    likes: number
    comments: number
    views: string
}

export type SidebarType = {
    links: SidebarLinksType[]
}

export type SidebarLinksType = {
    id: number
    text: string
    url: string
}

export type DialogsPageType = {
    path: string
    theme: string
    dialogs: DialogsType[]
}

export type DialogsType = {
    id: string
    name: string
    avatar: string
    messages: DialogsMessagesType[]
    status: string
}

export type DialogsMessagesType = {
    id: string
    text: string
    fromMe: boolean
    time: string
}


const store: StoreType = {
    profilePage: {
        path: "/profile/",
        info: {
            id: 0,
            name: "Timur Avezov",
            city: "Istanbul",
            age: 23,
            job: "Front-end Developer",
            avatar: "https://external-preview.redd.it/09t_euf4wShpq_wQ-VULNWxy_NkoN9BA52FIrvPHNDk.jpg?auto=webp&s=edce194c139f5819d6a70e35c00038b9eebb4541",
            bg: "https://thumbs.gfycat.com/UnrulyGlitteringBarnowl-max-1mb.gif",
            online: "online"
        },
        posts: [
            {
                id: v1(),
                text: "Hi. This is my second social network.",
                file: "",
                date: "03.01.2023",
                likes: 999,
                comments: 50,
                views: "500"
            },
            {
                id: v1(),
                text: "Why are you here?",
                file: "",
                date: "03.02.2023",
                likes: 535,
                comments: 15,
                views: "1.2K"
            },
            {
                id: v1(),
                text: "It is me.",
                file: "https://i.pinimg.com/originals/e8/65/16/e86516d00ea96913723bd4c3c391082b.jpg",
                date: "03.03.2023",
                likes: 1300,
                comments: 135,
                views: "2.5K"
            }
        ]
    },
    sidebar: {
        links: [
            {
                id: 0,
                text: "Profile",
                url: "/profile/"
            },
            {
                id: 1,
                text: "News",
                url: "/news/"
            },
            {
                id: 2,
                text: "Dialogs",
                url: "/dialogs/"
            },
            {
                id: 3,
                text: "Friends",
                url: "/friends/"
            },
            {
                id: 4,
                text: "Users",
                url: "/users/"
            },
            {
                id: 5,
                text: "Settings",
                url: "/settings/"
            }
        ]
    },
    dialogsPage: {
        path: "/dialogs/",
        theme: "https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png",
        dialogs: [
            {
                id: v1(),
                name: "Mark Zuckerberg",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
                messages: [
                    {
                        id: v1(),
                        text: "Hello Tim",
                        fromMe: false,
                        time: "17:00"
                    },
                    {
                        id: v1(),
                        text: "Hi, Mark",
                        fromMe: true,
                        time: "17:05"
                    }
                ],
                status: "online"
            },
            {
                id: v1(),
                name: "Bill Gates",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
                messages: [
                    {
                        id: v1(),
                        text: "Harvard was just a phenomenal experience for me. Academic life was fascinating. I used to sit in on lots of classes I hadn’t even signed up for. And dorm life was terrific. I lived up at Radcliffe, in Currier House. There were always lots of people in my dorm room late at night discussing things, because everyone knew I didn’t worry about getting up in the morning. That’s how I came to be the leader of the anti-social group. We clung to each other as a way of validating our rejection of all those social people.",
                        fromMe: false,
                        time: "20:00"
                    },
                    {
                        id: v1(),
                        text: "Hi, Bill",
                        fromMe: true,
                        time: "21:00"
                    }
                ],
                status: "offline"
            }
        ]
    }
};


export default store;