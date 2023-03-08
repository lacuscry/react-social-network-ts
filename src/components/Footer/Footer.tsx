import c from "./Footer.module.css";
import {FC} from "react";


const Footer: FC = () => {
    return (
        <footer className={c.footer}>
            <div className={c.container}>
                © 2023 @lacuscry
            </div>
        </footer>
    )
}


export default Footer;