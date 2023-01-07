// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - 컴포넌트는 재사용이 가능한 작은 부분으로 나누는 연습이 중요
// - 
// -----------------------------------------------------------------------------------------


import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'
const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
           { props.meetups.map(meetup => (
           <MeetupItem key={MeetupItem.id} 
           id={meetup.id} 
           image={meetup.image} 
           title={meetup.title}
           address={meetup.address}
           description={meetup.description}
           />))}
        </ul>
    );
};

export default MeetupList;