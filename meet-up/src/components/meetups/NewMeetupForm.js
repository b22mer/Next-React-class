// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - label에 for 속성을 넣을때, htmlFor을 넣어줘야한다.
// - 아래 버튼에서는 따로 타입을 지정해줄필요 없이 그냥 버튼을 사용하면 알아서 전송이된다.
// - 원래는 제출을하게되면 브라우저의 기본값때문에 새로고침이 되는데 이를 이벤트 객체로 방지가 가능하다.
//   - e.preventDefault, 리액트가 완벽하게 지원하는 기본적인 자바스크립트
// - 이제 폼에서 입력한 값을 제출할때는 두가지의 방법을 사용할수있다.
//   - useState => 이를 사용하면 사용자의 입력을 계속해서 추적을 할수있다.
//   - useRef => 해당 입력을 참조해서 값을 제출할수있다 => 한번만 제출하므로 얘를 사용
// 정리: 화면에 출력되는 내용을 변경하려면 useState, 입력값 및 읽을때는 ref가 유용하게 쓰임
// -----------------------------------------------------------------------------------------

import React, { useRef } from 'react';
import Card from '../../ui/Card';
import classes from './NewMeetupForm.module.css'
const NewMeetupForm = (props) => {
    const titleInputRef =useRef();
    const imageInputRef =useRef();
    const descriptionInputRef =useRef();
    const addressInputRef =useRef();

    const submitHandler = (e)=>{
        e.preventDefault(); //기본 브라우저 방지
        const enterTitle=titleInputRef.current.value;
        const enterImage=imageInputRef.current.value;
        const enterAddress=addressInputRef.current.value;
        const enterDescription=descriptionInputRef.current.value;
        console.log(enterTitle, enterImage, enterDescription, enterAddress);
        
        const meetupData ={
            title: enterTitle,
            image: enterImage,
            address: enterAddress,
            description: enterDescription,
        }

        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea  id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        
        </Card>
    );
};

export default NewMeetupForm;