import {SidebarType} from "../../store/store";
import c from "./Sidebar.module.css";


type SidebarProps = {
    sidebar: SidebarType
    burgerState: boolean
    toggleBurger: () => void
}


function Sidebar({sidebar, burgerState, toggleBurger}: SidebarProps) {
    const navList = sidebar.links.map(link => {
        return (
            <li key={link.id}>
                <a className={c.link} href={link.url}>{link.text}</a>
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