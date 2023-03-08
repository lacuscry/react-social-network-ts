import "./App.css";
import React, {FC, useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import store from "./store/store";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";


const App: FC = () => {
    const [burgerState, setBurgerState] = useState(false);

    const toggleBurger = () => setBurgerState(!burgerState);

    return (
        <React.StrictMode>
            <div className={"app" + (burgerState ? " overflow" : "")}>
                <Header burgerState={burgerState} toggleBurger={toggleBurger}/>
                <div className={"content"}>
                    <div className={"content__container"}>
                        <BrowserRouter>
                            <Sidebar burgerState={burgerState} toggleBurger={toggleBurger} sidebar={store.sidebar}/>
                            <Route children={<Profile profile={store.profilePage}/>} path={store.profilePage.path}/>
                            <Route children={<Dialogs profileInfo={store.profilePage.info} dialogsPage={store.dialogsPage}/>} path={store.dialogsPage.path}/>
                        </BrowserRouter>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.StrictMode>
    );
}


export default App;
