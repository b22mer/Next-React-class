// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - addMeetup핸들러를 사실은 form파일에서도 진행할수있지만 이미 form파일은 너무크기에 분할하자는 의미로 여기서 사용
// - http 요청을 보내려면 fetch함수를 사용한다. 최신 브라우저에서 지원하는 자바스크립트 함수.
//   - 처음엔 요청을 보내는 URL을 입력해야하는데, firebase api는 특이하게 끝에 .json을 입력해야한다.
//   - 기본적론 get으로 설정이 되어있는데 데이터를 저장해야하므로 post를 보내야한다.
//   - POST를 보낼때는 저장하려는 데이터를 그 요청에 추가를 해야한다. 이를 body에 담아 보낸다. 이때의 데이터는 대부분 json
//   - JSON.stringify를 사용하면 객체나 배열 그리고 일반적인 값이 JSON으로 변환된다.
//   - 마지막으로 원할 경우 header를 추가할수있는데 여기서 주의 할점이 쉼표를 잘 보자. 왜인지는 모르겠으나 쉼표 붙여서 안되던게 됨
// - 이때 axios 같은 서드파티 패키지를 사용해도 된다. 이도 역시 http요청을 보내기 위해 쓰는 라이브러리.
// -----------------------------------------------------------------------------------------

import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {

    const addMeetupHandler = (meetupData)=>{
        fetch('https://react-example-started-default-rtdb.firebaseio.com/meetups.json',
        {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',// 보낼 요청에 메타데이터를 추가 (이는 해당 요청이 json 데이터를 전달하는것을 확실히한다)
            }
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