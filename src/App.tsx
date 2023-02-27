import React from 'react';
import Header from "./components/Header/Header";
import Technologies from "./components/Technologies/Technologies";
import store from './store/store';


function App() {
    return (
        <div className="App">
            <Header links={store.header.links}/>
            <Technologies technologies={store.technologies}/>
        </div>
    );
}


export default App;
