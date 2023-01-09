// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - props를 통해 재사용한 동적 컴포넌트 완성
// - Card 래퍼 컴포넌트를 통하여 스타일을 적용 할수있게 했다. (children)
// -----------------------------------------------------------------------------------------
// - useContext를 사용하면 컴포넌트와 콘텍스트 사이를 연결할수있음.
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
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "즐겨찾기 삭제": "즐겨 찾기"}</button>
            </div>
            </Card>
        </li>
     
    );
};

export default MeetupItem;