import React from 'react';
import {DialogPageType} from "../../../Redux/state";
import s from "./MessageItem.module.css";


export type MessageItemType = {
    dialogsPage: DialogPageType
}


export const MessageItem: React.FC<MessageItemType> = ({dialogsPage}) => {

    const messages = dialogsPage.messages.map(el =>  {
        return (
            <ul>
                <li key={el.id}>
                    {el.message}
                </li>
            </ul>
        )
    })
    return (
        <div className={s.messageItems}>
            {messages}
        </div>
    );
};

