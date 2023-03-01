type StoreType = {
    sidebar: SidebarType
    profile: ProfileType
}

export type ProfileType = {
    info: ProfileInfoType
}

type ProfileInfoType = {
    id: number
    name: string
    city: string
    age: number
    job: string
    avatar: string
    bg: string
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
            name: 'Timur Avezov',
            city: 'Tashkent',
            age: 23,
            job: 'Front-end Developer',
            avatar: 'https://external-preview.redd.it/09t_euf4wShpq_wQ-VULNWxy_NkoN9BA52FIrvPHNDk.jpg?auto=webp&s=edce194c139f5819d6a70e35c00038b9eebb4541',
            bg: 'https://www.nemlig.com/scommerce/images/109845-Carlsberg-landing-page-hos-nemlig-TOPBANNER.jpg?i=%7B1D30F7EF-54D9-40E3-9F70-F0B2B49D8180%7D&v=gIJ7kRxI'
        }
    },
    sidebar: {
        links: [
            {
                id: 0,
                text: 'Profile',
                url: '/'
            },
            {
                id: 1,
                text: 'News',
                url: '/news/'
            },
            {
                id: 2,
                text: 'Messages',
                url: '/messages/'
            },
            {
                id: 3,
                text: 'Friends',
                url: '/friends/'
            },
            {
                id: 4,
                text: 'Users',
                url: '/users/'
            },
            {
                id: 5,
                text: 'Settings',
                url: '/settings/'
            }
        ]
    }
};


export default store;