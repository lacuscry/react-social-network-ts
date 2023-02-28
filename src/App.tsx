import './App.css';
import React from 'react';
import store from './store/store';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="app">
            <Header/>
            <Sidebar sidebar={store.sidebar}/>
            <Profile profile={store.profile}/>
            <Footer/>
        </div>
    );
}


export default App;
