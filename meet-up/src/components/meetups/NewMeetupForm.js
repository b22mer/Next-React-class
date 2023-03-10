// -----------------------------------------------------------------------------------------
// π κ°μλ΄μ©μ€ μ€μλΆλΆ μ²΄ν¬
// β­οΈ μ§μ€νμ μ§μ€μ
// -----------------------------------------------------------------------------------------
// - labelμ for μμ±μ λ£μλ, htmlForμ λ£μ΄μ€μΌνλ€.
// - μλ λ²νΌμμλ λ°λ‘ νμμ μ§μ ν΄μ€νμ μμ΄ κ·Έλ₯ λ²νΌμ μ¬μ©νλ©΄ μμμ μ μ‘μ΄λλ€.
// - μλλ μ μΆμνκ²λλ©΄ λΈλΌμ°μ μ κΈ°λ³Έκ°λλ¬Έμ μλ‘κ³ μΉ¨μ΄ λλλ° μ΄λ₯Ό μ΄λ²€νΈ κ°μ²΄λ‘ λ°©μ§κ° κ°λ₯νλ€.
//   - e.preventDefault, λ¦¬μ‘νΈκ° μλ²½νκ² μ§μνλ κΈ°λ³Έμ μΈ μλ°μ€ν¬λ¦½νΈ
// - μ΄μ  νΌμμ μλ ₯ν κ°μ μ μΆν λλ λκ°μ§μ λ°©λ²μ μ¬μ©ν μμλ€.
//   - useState => μ΄λ₯Ό μ¬μ©νλ©΄ μ¬μ©μμ μλ ₯μ κ³μν΄μ μΆμ μ ν μμλ€.
//   - useRef => ν΄λΉ μλ ₯μ μ°Έμ‘°ν΄μ κ°μ μ μΆν μμλ€ => νλ²λ§ μ μΆνλ―λ‘ μλ₯Ό μ¬μ©
// μ λ¦¬: νλ©΄μ μΆλ ₯λλ λ΄μ©μ λ³κ²½νλ €λ©΄ useState, μλ ₯κ° λ° μ½μλλ refκ° μ μ©νκ² μ°μ
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
        e.preventDefault(); //κΈ°λ³Έ λΈλΌμ°μ  λ°©μ§
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