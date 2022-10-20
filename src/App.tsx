import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Messages/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {RootStateType} from "./Redux/state";

export type AppPropsType = {
    state: RootStateType
    addPost: (newPostMessage: string) => void
}


const App: React.FC<AppPropsType> = ({state, addPost}) => {


    return (
        <BrowserRouter>
            <div className="App_wrapper">
                <Header/>
                <Navbar/>
                <div className={'wrapper_content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile profilePages={state.profilePage} addPost={addPost}/>}/>
                        <Route path={'/messages'} element={<Dialogs dialogsPage={state.dialogsPage}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
