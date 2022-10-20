import React from 'react';
import s from './Header.module.css'


export type HeaderType = {

}

export const Header: React.FC<HeaderType> = ({}) => {

    return (
        <div className={s.head}>
            <img src="http://www.retrocardiff.co.uk/wp-content/uploads/2019/02/premier-league-logo-png-transparent.png" alt="logo"/>
        </div>
    );
};

