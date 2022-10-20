import React from 'react';
import {Button} from "../../../../Button/Button";
import s from "../MyPostInputArea/MyPostInputArea.module.css";
import {TextArea} from "../../../../TextArea/TextArea";

export type MypostInputAreaType = {
    addPost: (newPostMessage: string) => void
}

export const MypostInputArea: React.FC<MypostInputAreaType> = ({addPost,}) => {

    let newPost = React.createRef<HTMLTextAreaElement>()


    const addMyPost = () => {
        debugger
        if (newPost.current) {
            addPost(newPost.current?.value)
        }
    }

    return (
        <div className={s.MyPostsArea}>
            <h3>My Posts</h3>
            <TextArea rows={2} columns={30} placeHolder={'Say something ...'} ref={newPost}/>
            <Button buttonName={'ADD POST'} callBack={addMyPost} buttonClassName={s.addPostButton}/>
            {}
        </div>
    );
};

