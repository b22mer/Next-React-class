// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - props를 통해 재사용한 동적 컴포넌트 완성
// - Card 래퍼 컴포넌트를 통하여 스타일을 적용 할수있게 했다. (children)
// -----------------------------------------------------------------------------------------

import React from 'react';
import Card from '../../ui/Card';
import classes from './MeetupItem.module.css'
const MeetupItem = (props) => {
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} title={props.title}></img>
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>

            <div className={classes.actions}> 
                <button>to favorite</button>
            </div>
            </Card>
        </li>
     
    );
};

export default MeetupItem;