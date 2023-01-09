// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// ----
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
    const favoriteCtx=useContext(FavoritesContext)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetup</div>
            <ul>
            <li><Link to='/'>All Meetups</Link></li>
            <li><Link to='/new-meet'>Add New Meetup</Link></li>
            <li><Link to='/favorites'>My Favorites
            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
            </Link></li>
            </ul>
        </header>
    );
};

export default MainNavigation;