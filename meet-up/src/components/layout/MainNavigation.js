// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// ----
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetup</div>
            <ul>
            <li><Link to='/'>AllMeetups</Link></li>
            <li><Link to='/new-meet'>NewMeetup</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
        </header>
    );
};

export default MainNavigation;