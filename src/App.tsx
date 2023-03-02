import "./App.css";
import React, {useEffect, useState} from "react";
import store from "./store/store";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";


function App() {
    const [burgerState, setBurgerState] = useState(false);

    const toggleBurger = () => setBurgerState(!burgerState);

    useEffect(() => {
        if (burgerState) {
            const onKeydown = (e: KeyboardEvent) => e.code === "Escape" && toggleBurger();

            document.addEventListener("keydown", onKeydown);

            return () => document.removeEventListener("keydown", onKeydown);
        }
    }, [burgerState]);

    return (
        <React.StrictMode>
            <div className={"app" + (burgerState ? ` overflow` : "")}>
                <Header burgerState={burgerState} toggleBurger={toggleBurger}/>
                <div className={"content"}>
                    <div className={"content__container"}>
                        <Sidebar burgerState={burgerState} toggleBurger={toggleBurger} sidebar={store.sidebar}/>
                        <Profile profile={store.profile}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.StrictMode>
    );
}


export default App;
