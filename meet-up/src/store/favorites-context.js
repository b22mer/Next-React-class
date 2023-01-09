// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
//  -context란 결국에는 자바스크립트 객체이다.
//  -context도 초기값을 받게된다. 
//  -값을 수신하는데에 관심이 있는 모든 컴포넌트 즉, 컨텍스트로부터의 값이 필요한 모든 컴포넌트에 
//   콘텍스트를 제공하는 역할의 컴포넌트이다. (아래의 함수) 또한 컨텍스트의 값을 업데이트하는 역할
//   또한 하게 된다. 
//  -이를 index.js 에 래핑해주면서 모든 컴포넌트가 콘텍스트에 액세스 할수있도록 한다.
//  -따라서 이 컴포넌트내에서 콘텍스트 값을 변경하고 그 컨텍스트 값을 프로바이더로 전달하면 수신대기
//   하고있는 모든 컴포넌트들이 업데이트 된다.
//  -value의 프로퍼티를 이용해 최신값을 전달하는것. 즐겨찾기에 추가된 모임약속 배열을 여기서 관리한다.
// -----------------------------------------------------------------------------------------
import { createContext } from "react";
import AllMeetups from './../pages/AllMeetups';
import { useState } from 'react';

const FavoritesContext=createContext({
   favorites: [],
   totalFavorites:0,
});

const FavoritesContextProvider= (props)=>{
    const [userFavorites,setUserFavorites]=useState([]);
    const addFavoritesHandler= (favoriteMeetup)=>{
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup)
            // 이렇게 함수 형태로 적어주면 상태 업데이트 함수로 전달한 함수가 올바른 순서에 실행이됨
            // 즉 바로 최신상태로 가능 
        });
      
    }

    const removeFavoritesHandler= (meetupId)=>{
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup => meetup.od!== meetupId);

        })
    }

    const itemIsFavoritesHandler= (meetupId)=>{
 
        return userFavorites.some(meetup => meetup.id === meetupId)
        // some 함수를 인수로 받아 배열내의 각 항목마다 함수를 실행할것
        // userFavorte내에 meetupId를 가진 meetup이 있으면 참을 반환
    }
    const context= {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}