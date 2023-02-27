type HeaderPropsType = {
    links: [
        {
            id: number,
            name: string,
            url: string
        }
    ]
}


function Header(props: HeaderPropsType) {
    const headerLinks = props.links.map((link: {id: number, name: string, url: string}) => <li key={link.id}><a href={link.url}>{link.name}</a></li>);

    return (
        <ul>
            {headerLinks}
        </ul>
    )
}


export default Header;