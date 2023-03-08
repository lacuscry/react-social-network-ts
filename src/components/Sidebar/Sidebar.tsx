import c from "./Sidebar.module.css";
import {FC} from "react";
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../store/store";


type SidebarProps = {
    sidebar: SidebarType
    burgerState: boolean
    toggleBurger: () => void
}


const Sidebar: FC<SidebarProps> = ({sidebar, burgerState, toggleBurger}) => {
    const navList = sidebar.links.map(link => {
        return (
            <li key={link.id}>
                <NavLink to={link.url} className={c.link} activeClassName={c.active}>{link.text}</NavLink>
            </li>
        );
    });

    return (
        <aside className={c.sidebar + (burgerState ? ` ${c.open}` : "")}>
            <div onClick={toggleBurger} className={c.bg}></div>
            <nav className={c.nav}>
                <ul className={c.list}>
                    {navList}
                </ul>
            </nav>
        </aside>
    );
}


export default Sidebar;