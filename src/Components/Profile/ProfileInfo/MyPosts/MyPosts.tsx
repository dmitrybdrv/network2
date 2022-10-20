import React from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./Posts/Posts";
import {ProfilePageType} from "../../../../Redux/state";
import {MypostInputArea} from "./MyPostInputArea/MypostInputArea";


export type MyPostsType = {
    profilePages: ProfilePageType
    addPost: (newPostMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({profilePages, addPost,}) => {
    return (
        <div className={s.myPosts}>
            <MypostInputArea addPost={addPost}/>
            <Posts profilePages={profilePages}/>
        </div>
    );
};

