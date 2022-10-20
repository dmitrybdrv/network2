import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./ProfileInfo/MyPosts/MyPosts";
import {ProfilePageType} from "../../Redux/state";

export type ProfileType = {
    profilePages: ProfilePageType
    addPost: (newPostMessage: string) => void
}


export const Profile: React.FC<ProfileType> = ({profilePages, addPost,}) => {
    return (
        <div className={s.profile}>
            <img
                src="https://imageio.forbes.com/specials-images/dam/imageserve/c871110c99c54269a897c03a92e494b0/960x0.jpg?format=jpg&width=960"
                alt="page info wallpaper"/>
            <ProfileInfo/>
            <MyPosts profilePages={profilePages} addPost={addPost}/>
        </div>
    );
};

