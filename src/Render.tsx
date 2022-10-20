import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, RootStateType, state} from "./Redux/state";




export let rerenderEntireThree = (props: RootStateType) => {

    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}