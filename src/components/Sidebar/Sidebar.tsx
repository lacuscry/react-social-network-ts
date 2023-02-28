import {SidebarType} from "../../store/store";


type SidebarProps = {
    sidebar: SidebarType
}


function Sidebar(props: SidebarProps) {
    const navList = props.sidebar.links.map(link => {
      return (
          <li className={'sidebar__link'} key={link.id}>
              <a href={link.url}>{link.text}</a>
          </li>
      )
    })

    return (
        <aside className={'sidebar'}>
            <nav className={'sidebar__nav'}>
                <ul className={'sidebar__list'}>
                    {navList}
                </ul>
            </nav>
        </aside>
    )
}


export default Sidebar;