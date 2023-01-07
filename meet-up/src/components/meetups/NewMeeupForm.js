// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - label에 for 속성을 넣을때, htmlFor을 넣어줘야한다.
// - 아래 버튼에서는 따로 타입을 지정해줄필요 없이 그냥 버튼을 사용하면 알아서 전송이된다.
// -----------------------------------------------------------------------------------------

import React from 'react';
import Card from '../../ui/Card';
import classes from './NewMeetupForm.module.css'
const NewMeeupForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type="text" required id="address"></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea  id="description" required rows='5'></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        
        </Card>
    );
};

export default NewMeeupForm;