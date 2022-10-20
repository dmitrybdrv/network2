import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogPageType} from "../../../Redux/state";
import s from "./DialogItem.module.css";


export type DialogItemType = {
    dialogsPage: DialogPageType
}


export const DialogItem: React.FC<DialogItemType> = ({dialogsPage}) => {

    const users = dialogsPage.dialogs.map(name => {

        return (
                <li key={name.id} className={s.items}>
                    <NavLink to={'/messages'}>{name.name}</NavLink>
                </li>
        )
    })


    return (
        <div className={s.userItems}>
            {users}
        </div>
    );
};

