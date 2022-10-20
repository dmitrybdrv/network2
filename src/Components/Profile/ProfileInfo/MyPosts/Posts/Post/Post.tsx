import React from 'react';
import s from './Post.module.css'
import {ProfilePageType} from "../../../../../../Redux/state";

export type PostType = {
    profilePages: ProfilePageType
}

export const Post: React.FC<PostType> = ({profilePages}) => {

    const post = profilePages.posts.map(el => {
        return (
            <div key={el.id} className={s.guestAva}><img src={el.avatar} alt="ava`s"/> {el.message} <strong>{el.likesCount}</strong></div>
        )
    })

    return (
        <div className={s.post}>
            <div className={s.guests}>
                {post}
            </div>
        </div>
    );
};

