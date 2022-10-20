import React from 'react';
import s from './ProfileInfo.module.css'

export type ProfileInfoType = {}


export const ProfileInfo: React.FC<ProfileInfoType> = ({}) => {
    return (
        <div className={s.profileInfo}>
            <img className={s.mainAvatar} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="avatar"/>
            <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum ipsum, laboriosam magnam molestiae nesciunt
                perspiciatis qui sequi totam vitae.</p>
        </div>
    );
};

