type StoreType = {
    sidebar: SidebarType
    profile: ProfileType
}

export type ProfileType = {
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
    id: number
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


const store: StoreType = {
    profile: {
        info: {
            id: 0,
            name: "Timur Avezov",
            city: "Tashkent",
            age: 23,
            job: "Front-end Developer",
            avatar: "https://external-preview.redd.it/09t_euf4wShpq_wQ-VULNWxy_NkoN9BA52FIrvPHNDk.jpg?auto=webp&s=edce194c139f5819d6a70e35c00038b9eebb4541",
            bg: "https://thumbs.gfycat.com/UnrulyGlitteringBarnowl-max-1mb.gif",
            online: "online"
        },
        posts: [
            {
                id: 0,
                text: "Hi. This is my second social network.",
                file: "",
                date: "03.01.2023",
                likes: 999,
                comments: 50,
                views: "500"
            },
            {
                id: 1,
                text: "Why are you here?",
                file: "",
                date: "03.02.2023",
                likes: 535,
                comments: 15,
                views: "1.2K"
            },
            {
                id: 2,
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
                url: "/"
            },
            {
                id: 1,
                text: "News",
                url: "/news/"
            },
            {
                id: 2,
                text: "Messages",
                url: "/messages/"
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
    }
};


export default store;