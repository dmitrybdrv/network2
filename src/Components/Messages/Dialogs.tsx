import React from 'react';
import {DialogPageType} from "../../Redux/state";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import s from './Dialogs.module.css'
import {TextArea} from "../TextArea/TextArea";
import {Button} from "../Button/Button";

export type DialogsType = {
    dialogsPage: DialogPageType
}


export const Dialogs: React.FC<DialogsType> = ({dialogsPage}) => {




    return (
        <div className={s.dialogPage}>
            <TextArea columns={1} rows={1} placeHolder={'Say hi...!'} className={s.textArea}/>
            <Button buttonName={'SEND'} buttonClassName={s.buttonAddMessage} callBack={() => {
            }}/>
            <DialogItem dialogsPage={dialogsPage}/>
            <MessageItem dialogsPage={dialogsPage}/>

        </div>
    );
};

