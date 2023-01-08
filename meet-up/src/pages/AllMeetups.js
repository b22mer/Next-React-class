// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - 컴포넌트로 프로퍼티를 보낼떄는 그 이름이 전달받는 곳과 이름이 같아야함
// -----------------------------------------------------------------------------------------
// - 이제 올 밋업 페이지에서는 데이터를 페칭하여 가져와야하는데 언제 가져올지를 생각해보면 이페이지를
// 열때마다 데이터를 불러와야하므로 여기서 설정하며 fetch의 요청 설정은 기본으로 둔다. get이 기본이기에!
// fetch는 프로미스를 반환하기에 then을 사용해 익명함수를 전달하면 자동으로 응답객체를 인수로 얻을수있다.
// - 그 응답으로 부터는 본문(body) 즉 데이터를 읽어야하는데 이때는 json 메소드를 사용하게된다. 
// - response 객체에서 바로 사용이 가능한 메소드 이며 이를 통해 JSON으로부터 자바스크립트 객체로 자동으로 변환된
// 데이터로 액세스 할수있다. * 주의할점은 josn 또한 프로미스를 반환하기에 프로미스가 resolve 될떄까지 대기해야 한다.
// - 그래서 then 블록을 하나 더 추가해 실제 데이터를 받는다.
// 이 과정에서 문제가 생긴다. 페치가 프로미스를 반환하여 프로미스 체인상에 있어 자바스크립트는 해당 return 전에는 프로미스가
// 완료되기 전까지 대기하지 않는다. 그럼 끝날때까지 대기하기위해 async await를 사용할수있다고 생각할수도 있는데 그럼 전체 컴포
// 넌트가 프로미스를 반환하게 되기 때문에 원하지 않는 상황이 벌어질것. async 키워드의 역할이 함수가 프로미스를 반환하도록 변환
// 시키는 것이기에 그렇게되면 더이상 유효한 리액트 컴포넌트로 받아 들여지지 않는다. 
// - 리액트 컴포넌트 함수는 동기적이어야 하며 프로미스가 아닌 jsx를 직접 반환해야한다. 고로 async await사용 할수없고 응답
// 받을때까지 값 반환을 미룰수가 없다. 그대신 임시 jsx 코드를 반환해야하는데 이때 "로딩스피너가" 그 예시가 될수가 있다.
// - 이때 state를 이용하자! 첫번째 요소는 현재 상태 스냅샷, 두번째는 상태 업데이트이다.
// - 상태 업데이트 함수는 호출 할때는 react에게 이 컴포넌트 함수를 재실행 및 재평과 한뒤 업데이트된 jsx 코드를 반환한다.
// - 고로 fetch를 이렇게 그냥 두면 무한 루프에 빠져든다. 이때 사용할수있는것이 바로 useEffect이다.
// -----------------------------------------------------------------------------------------
// - useEffect
//   - 이는 특정 조건하에서 일부 코드를 실행가능케하는 훅이다. 
//   - 인수는 (함수, [](배열, 의존) ), 재실행될때는 특정 상황에서는 실행이된다.
//   - 두번째 인자에 배열을 지정해주지 않고 비워두면 컴포함수가 실행될때 마다 useEffect함수가 실행될테니 아무 소용없어진다. => 고로 그냥 함수실행하는꼴
//   - 이렇게 두번째 배열이 추가되면, 추가된 값을 확인하고 마지막으로 이 함수가 실행되었을 때의 값과 비교하게된다.
//   - 의존성이 없어 배열이 빈 경우에는 컴포넌트 함수가 렌더링 되어 첨으로 실행되었을때만 이 함수를 실행할것
// -----------------------------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
    
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups]=useState([])

    useEffect(()=>{
    setIsLoading(true);
    fetch('https://react-example-started-default-rtdb.firebaseio.com/meetups.json'
    ).then(reponse=> {
      return reponse.json()
    }).then(data=>{
      const meetups=[];
      for(const key in data){
        const meetup={
          id: key,
          ...data[key]
        };
        console.log(data);
        meetups.push(meetup)
      }

      setIsLoading(false); // 데이터가 있으면 로딩을 하지 않음
      setLoadedMeetups(meetups);
    });
  },[]);

 

  if(isLoading){
    return(
      <section>
        <p>Loading ...</p>
      </section>
    )
  }

  
    return (
        <section>
            <h1>AllMeetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
};

export default AllMeetups;














// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];