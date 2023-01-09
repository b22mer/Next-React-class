// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - App 컴포넌트 내의 상태를 관리하고 프로퍼티를 통해 분배할수있는데 여기서 문제점들이 존재한다.
//   - 첫 번째 단점은 어플리케이션의 규모가 커진다
//   - 다른 컴포넌트에 영향을 미치는 다른 상태가 추가 될경우 app 컴포넌트에서 많은 상태를 관리해야 하므로 
//    app 컴포넌트의 길이가 계속 길어져 이상적이지 않다.
//   - 상태를 프로퍼티로서 전달해 내려가면 아주 긴 프로퍼티 체인이 생길수가 있다.
//  이를 해결하기위한 방법이 몇가지가 있다.
//   1. Redux (상태관리 패키지) 
//   2. Context (내장 상태관리 장치)
// -----------------------------------------------------------------------------------------
//   - 즐겨찾기를 구현했지만 새로고침을 하게되면 사라지는것을 볼수이싿. 상태 및 상수로만 작업을 했고 영구적으
//     으로 저장된건 아니기 때문이다. 이를 영구적으로 저장하려면 favoriteContextprovider에서 로컬 스토리지등의
//     브라우저 스토리지를 사용하거나 서버에 저장을 해야한다. 
// -----------------------------------------------------------------------------------------

import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const Favorites = () => {
    const favoriteCtx=useContext(FavoritesContext);
    let content;
    if(favoriteCtx.totalFavorites===0){
        content= <p>아직 즐겨찾기에 추가한 내용이 없습니다.</p>
    }else{
        content=<MeetupList meetups={favoriteCtx.favorites}/>
    }
    return (
        <section>
            <h1>My favorites</h1>
            {/* <MeetupList meetups={favoriteCtx.favorites}/> */}
            {content}
        </section>
    );
};

export default Favorites;