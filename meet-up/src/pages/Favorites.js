// -----------------------------------------------------------------------------------------
// ๐ ๊ฐ์๋ด์ฉ์ค ์ค์๋ถ๋ถ ์ฒดํฌ
// โญ๏ธ ์ง์คํ์ ์ง์ค์
// -----------------------------------------------------------------------------------------
// - App ์ปดํฌ๋ํธ ๋ด์ ์ํ๋ฅผ ๊ด๋ฆฌํ๊ณ  ํ๋กํผํฐ๋ฅผ ํตํด ๋ถ๋ฐฐํ ์์๋๋ฐ ์ฌ๊ธฐ์ ๋ฌธ์ ์ ๋ค์ด ์กด์ฌํ๋ค.
//   - ์ฒซ ๋ฒ์งธ ๋จ์ ์ ์ดํ๋ฆฌ์ผ์ด์์ ๊ท๋ชจ๊ฐ ์ปค์ง๋ค
//   - ๋ค๋ฅธ ์ปดํฌ๋ํธ์ ์ํฅ์ ๋ฏธ์น๋ ๋ค๋ฅธ ์ํ๊ฐ ์ถ๊ฐ ๋ ๊ฒฝ์ฐ app ์ปดํฌ๋ํธ์์ ๋ง์ ์ํ๋ฅผ ๊ด๋ฆฌํด์ผ ํ๋ฏ๋ก 
//    app ์ปดํฌ๋ํธ์ ๊ธธ์ด๊ฐ ๊ณ์ ๊ธธ์ด์ ธ ์ด์์ ์ด์ง ์๋ค.
//   - ์ํ๋ฅผ ํ๋กํผํฐ๋ก์ ์ ๋ฌํด ๋ด๋ ค๊ฐ๋ฉด ์์ฃผ ๊ธด ํ๋กํผํฐ ์ฒด์ธ์ด ์๊ธธ์๊ฐ ์๋ค.
//  ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ์ํ ๋ฐฉ๋ฒ์ด ๋ช๊ฐ์ง๊ฐ ์๋ค.
//   1. Redux (์ํ๊ด๋ฆฌ ํจํค์ง) 
//   2. Context (๋ด์ฅ ์ํ๊ด๋ฆฌ ์ฅ์น)
// -----------------------------------------------------------------------------------------
//   - ์ฆ๊ฒจ์ฐพ๊ธฐ๋ฅผ ๊ตฌํํ์ง๋ง ์๋ก๊ณ ์นจ์ ํ๊ฒ๋๋ฉด ์ฌ๋ผ์ง๋๊ฒ์ ๋ณผ์์ด์ฟ. ์ํ ๋ฐ ์์๋ก๋ง ์์์ ํ๊ณ  ์๊ตฌ์ ์ผ
//     ์ผ๋ก ์ ์ฅ๋๊ฑด ์๋๊ธฐ ๋๋ฌธ์ด๋ค. ์ด๋ฅผ ์๊ตฌ์ ์ผ๋ก ์ ์ฅํ๋ ค๋ฉด favoriteContextprovider์์ ๋ก์ปฌ ์คํ ๋ฆฌ์ง๋ฑ์
//     ๋ธ๋ผ์ฐ์  ์คํ ๋ฆฌ์ง๋ฅผ ์ฌ์ฉํ๊ฑฐ๋ ์๋ฒ์ ์ ์ฅ์ ํด์ผํ๋ค. 
// -----------------------------------------------------------------------------------------

import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const Favorites = () => {
    const favoriteCtx=useContext(FavoritesContext);
    let content;
    if(favoriteCtx.totalFavorites===0){
        content= <p>์์ง ์ฆ๊ฒจ์ฐพ๊ธฐ์ ์ถ๊ฐํ ๋ด์ฉ์ด ์์ต๋๋ค.</p>
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