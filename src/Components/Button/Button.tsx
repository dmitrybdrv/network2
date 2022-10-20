import React from 'react';


export type ButtonType = {
    buttonName: string
    callBack: () => void
    buttonClassName: string
}


export const Button: React.FC<ButtonType> = ({buttonName, callBack, buttonClassName}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button className={buttonClassName} onClick={onClickHandler}>{buttonName}</button>
    );
};

