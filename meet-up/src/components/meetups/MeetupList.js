// -----------------------------------------------------------------------------------------
// π κ°μλ΄μ©μ€ μ€μλΆλΆ μ²΄ν¬
// β­οΈ μ§μ€νμ μ§μ€μ
// -----------------------------------------------------------------------------------------
// - μ»΄ν¬λνΈλ μ¬μ¬μ©μ΄ κ°λ₯ν μμ λΆλΆμΌλ‘ λλλ μ°μ΅μ΄ μ€μ
// - 
// -----------------------------------------------------------------------------------------


import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'
const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
           { props.meetups.map(meetup => (
           <MeetupItem key={meetup.id} 
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