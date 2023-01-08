// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - addMeetup핸들러를 사실은 form파일에서도 진행할수있지만 이미 form파일은 너무크기에 분할하자는 의미로 여기서 사용
// -----------------------------------------------------------------------------------------

import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {

    const addMeetupHandler = (meetupData)=>{
        

    }
    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
};

export default NewMeetup;