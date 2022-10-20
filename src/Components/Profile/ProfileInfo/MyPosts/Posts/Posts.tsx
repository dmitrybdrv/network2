import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../../../Redux/state";

export type PostsType = {
    profilePages: ProfilePageType
}

export const Posts: React.FC<PostsType> = ({profilePages}) => {
    return (
        <div className={s.posts}>
            <h3>LET`S ROCK!!!!</h3>
            <Post profilePages={profilePages}/>
        </div>
    );
};



