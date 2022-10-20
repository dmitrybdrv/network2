import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export type NavbarType = {

}

export const Navbar: React.FC<NavbarType> = ({}) => {
    return (
        <div className={s.navbar}>
            <nav>
                <div className={s.item}><NavLink to={'/profile'} style={({isActive}) => isActive ? {color: '#bf85de'} : {color: '#3d195b'}}>Profile</NavLink></div>
                <div className={s.item}><NavLink to={'/messages'} style={({isActive}) => isActive ? {color: '#bf85de'} : {color: '#3d195b'}}>Messages</NavLink></div>
                <div className={s.item}><NavLink to={'/news'} style={({isActive}) => isActive ? {color: '#bf85de'} : {color: '#3d195b'}}>News</NavLink></div>
                <div className={s.item}><NavLink to={'/music'} style={({isActive}) => isActive ? {color: '#bf85de'} : {color: '#3d195b'}}>Music</NavLink></div>
                <div className={s.item}><NavLink to={'/settings'} style={({isActive}) => isActive ? {color: '#bf85de'} : {color: '#3d195b'}}>Settings</NavLink></div>
            </nav>
        </div>
    );
};

