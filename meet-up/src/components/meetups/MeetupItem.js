// -----------------------------------------------------------------------------------------
// ๐ ๊ฐ์๋ด์ฉ์ค ์ค์๋ถ๋ถ ์ฒดํฌ
// โญ๏ธ ์ง์คํ์ ์ง์ค์
// -----------------------------------------------------------------------------------------
// - props๋ฅผ ํตํด ์ฌ์ฌ์ฉํ ๋์  ์ปดํฌ๋ํธ ์์ฑ
// - Card ๋ํผ ์ปดํฌ๋ํธ๋ฅผ ํตํ์ฌ ์คํ์ผ์ ์ ์ฉ ํ ์์๊ฒ ํ๋ค. (children)
// -----------------------------------------------------------------------------------------
// - useContext๋ฅผ ์ฌ์ฉํ๋ฉด ์ปดํฌ๋ํธ์ ์ฝํ์คํธ ์ฌ์ด๋ฅผ ์ฐ๊ฒฐํ ์์์.
// -----------------------------------------------------------------------------------------
import React, { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../../ui/Card';
import classes from './MeetupItem.module.css'
const MeetupItem = (props) => {
    
    const favoritesCtx=useContext(FavoritesContext);
    const itemIsFavorite= favoritesCtx.itemIsFavorite(props.id);
    const toggleFavoriteStatusHandler = ()=>{
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }
    return (
        
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}></img>
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>

            <div className={classes.actions}> 
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "์ฆ๊ฒจ์ฐพ๊ธฐ ์ญ์ ": "์ฆ๊ฒจ ์ฐพ๊ธฐ"}</button>
            </div>
            </Card>
        </li>
     
    );
};

export default MeetupItem;