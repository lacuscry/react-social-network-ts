import c from "./Header.module.css";
import React, {FC, useEffect, useState} from "react";


type HeaderType = {
    burgerState: boolean
    toggleBurger: () => void
}


const Header: FC<HeaderType> = ({burgerState, toggleBurger}) => {
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 10 ? setFixed(true) : setFixed(false);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [fixed]);

    return (
        <header className={c.header + (burgerState ? ` ${c.open_burger}` : "") + (fixed ? ` ${c.fixed}` : "")}>
            <div className={c.container}>
                <a className={c.logo} href={"/"}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M42.37 24.8C42 20 41.63 5.12 41.62 4.98L41.6 4H8.5V29L9.81 38.74L11.94 40.73L12.62 40L13.12 39.99C13.94 39.38 14.86 38.79 15.88 38.25C16.73 38.59 17.98 39.4 18.7 39.88L19.94 39.85L22.5 38.38L24.38 39.76L26.53 39.72L28.5 38.38L30.15 39.65L32.33 39.61L34.12 38.13C34.12 38.13 35.34 38.35 37.13 39.51L37.62 39.5L37.83 40L38.01 40.42L38.25 40.32L40.88 39.22L40.98 38.7C41.05 38.33 42.75 29.75 42.37 24.8ZM17.5 27C16.12 27 15 25.88 15 24.5C15 23.12 16.12 22 17.5 22C18.88 22 20 23.12 20 24.5C20 25.88 18.88 27 17.5 27ZM25.5 35.75C22 36 18.75 32.75 18.75 32.75L19.62 31.88C19.62 31.88 22.48 33.87 25.25 33.5C29 33 30.75 32.12 30.75 32.12L31.88 32.88C31.88 32.88 29 35.5 25.5 35.75ZM33.5 27C32.12 27 31 25.88 31 24.5C31 23.12 32.12 22 33.5 22C34.88 22 36 23.12 36 24.5C36 25.88 34.88 27 33.5 27Z"
                            fill="white" className={c.face}/>
                        <path
                            d="M42.643 47.015C39.213 41.299 35.569 39.642 34.359 39.23L31.271 41.78L28.463 39.61L25.351 41.726L22.433 39.569L19.197 41.436L18.675 41.067C18.186 40.722 16.869 39.84 15.918 39.366C10.48 42.415 8.168 46.903 8.145 46.949L6.35699 46.053C6.46499 45.837 9.073 40.728 15.408 37.367L15.817 37.15L16.248 37.322C17.201 37.703 18.557 38.573 19.298 39.07L22.569 37.182L25.401 39.275L28.539 37.141L31.231 39.221L33.847 37.06L34.303 37.142C34.52 37.181 39.679 38.187 44.359 45.987L42.643 47.015Z"
                            fill="white"/>
                    </svg>
                </a>
                <button onClick={toggleBurger} className={c.burger}>
                    <span></span>
                </button>
            </div>
        </header>
    );
}


export default Header;