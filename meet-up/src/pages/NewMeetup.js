// -----------------------------------------------------------------------------------------
// ๐ ๊ฐ์๋ด์ฉ์ค ์ค์๋ถ๋ถ ์ฒดํฌ
// โญ๏ธ ์ง์คํ์ ์ง์ค์
// -----------------------------------------------------------------------------------------
// - addMeetupํธ๋ค๋ฌ๋ฅผ ์ฌ์ค์ formํ์ผ์์๋ ์งํํ ์์์ง๋ง ์ด๋ฏธ formํ์ผ์ ๋๋ฌดํฌ๊ธฐ์ ๋ถํ ํ์๋ ์๋ฏธ๋ก ์ฌ๊ธฐ์ ์ฌ์ฉ
// - http ์์ฒญ์ ๋ณด๋ด๋ ค๋ฉด fetchํจ์๋ฅผ ์ฌ์ฉํ๋ค. ์ต์  ๋ธ๋ผ์ฐ์ ์์ ์ง์ํ๋ ์๋ฐ์คํฌ๋ฆฝํธ ํจ์.
//   - ์ฒ์์ ์์ฒญ์ ๋ณด๋ด๋ URL์ ์๋ ฅํด์ผํ๋๋ฐ, firebase api๋ ํน์ดํ๊ฒ ๋์ .json์ ์๋ ฅํด์ผํ๋ค.
//   - ๊ธฐ๋ณธ์ ๋ก  get์ผ๋ก ์ค์ ์ด ๋์ด์๋๋ฐ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํด์ผํ๋ฏ๋ก post๋ฅผ ๋ณด๋ด์ผํ๋ค.
//   - POST๋ฅผ ๋ณด๋ผ๋๋ ์ ์ฅํ๋ ค๋ ๋ฐ์ดํฐ๋ฅผ ๊ทธ ์์ฒญ์ ์ถ๊ฐ๋ฅผ ํด์ผํ๋ค. ์ด๋ฅผ body์ ๋ด์ ๋ณด๋ธ๋ค. ์ด๋์ ๋ฐ์ดํฐ๋ ๋๋ถ๋ถ json
//   - JSON.stringify๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฐ์ฒด๋ ๋ฐฐ์ด ๊ทธ๋ฆฌ๊ณ  ์ผ๋ฐ์ ์ธ ๊ฐ์ด JSON์ผ๋ก ๋ณํ๋๋ค.
//   - ๋ง์ง๋ง์ผ๋ก ์ํ  ๊ฒฝ์ฐ header๋ฅผ ์ถ๊ฐํ ์์๋๋ฐ ์ฌ๊ธฐ์ ์ฃผ์ ํ ์ ์ด ์ผํ๋ฅผ ์ ๋ณด์. ์์ธ์ง๋ ๋ชจ๋ฅด๊ฒ ์ผ๋ ์ผํ ๋ถ์ฌ์ ์๋๋๊ฒ ๋จ
// - ์ด๋ axios ๊ฐ์ ์๋ํํฐ ํจํค์ง๋ฅผ ์ฌ์ฉํด๋ ๋๋ค. ์ด๋ ์ญ์ http์์ฒญ์ ๋ณด๋ด๊ธฐ ์ํด ์ฐ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ.
// -----------------------------------------------------------------------------------------
// - ๊ฐ์์์์๋ useHistory๋ฅผ ์ฌ์ฉํ๊ณ ์๋๋ฐ, react-router-dom์ด ์ค์น๋์ด์๋๋ฐ๋ ์๋๋๊ฒ์ ๋ณด๊ณ  ๋ฌด์จ๋ฌธ์ 
// ์ธ์ง ๊ฒ์์ ํด๋ณธ๊ฒฐ๊ณผ "useHistory Hook์ react-router 5๋ฒ์ ๊น์ง ์ฌ์ฉํ  ์ ์๋ค. ์ต๊ทผ์ ๋์จ 6๋ฒ์ ์์๋ useNavigate๋ก ๋ณ๊ฒฝ๋์๋ค"
// ๋ผ๊ณ ํ๋ค. 
// - ๋ฐ์ดํฐ๊ฐ ์ ์ถ๋ํ์ ๋ค๋ฅธ๊ณณ์ผ๋ก ์ด๋ํ๋ ค๋ ๊ฒฝ์ฐ fetch๊ฐ ํ๋ก๋ฏธ์ค๋ฅผ ๋ฐํํ๋ค๋๊ฒ์ ์์์๋ค. ๊ทธ๋ผ ๋ฐ์ดํฐ ์ ์ถ ์ฆ์ ํด๊ฒฐ๋ ์์๋ค.
// ๋ฐ๋ผ์ then ๋ธ๋ก์ ์ถ๊ฐํ๊ณ  ํ๋ก๋ฏธ์ค๊ฐ ์๋ฃ๋ ๋ ์คํ๋  ํจ์๋ฅผ ์ ์ํ๋ค.
// - replace ์ฌ์ฉํ์ฌ ์ด๋ํ์  ๋ค๋ก๊ฐ๊ธฐ๊ฐ ์๋๋๋ก ์ค์ ์ ํ ์๊ฐ ์๋ค.
// -----------------------------------------------------------------------------------------
import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import {useNavigate} from 'react-router-dom'
const NewMeetup = () => {
    const navigate = useNavigate();
    const addMeetupHandler = (meetupData)=>{
        fetch('https://react-example-started-default-rtdb.firebaseio.com/meetups.json',
        {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',// ๋ณด๋ผ ์์ฒญ์ ๋ฉํ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐ (์ด๋ ํด๋น ์์ฒญ์ด json ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ๋๊ฒ์ ํ์คํํ๋ค)
            }
        }).then(()=>{
            //history.replace('/')
            navigate('/',{ replace: true})
        });
    }

    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
            
        </div>
    );
};

export default NewMeetup;