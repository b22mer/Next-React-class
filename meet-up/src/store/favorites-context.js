// -----------------------------------------------------------------------------------------
// π κ°μλ΄μ©μ€ μ€μλΆλΆ μ²΄ν¬
// β­οΈ μ§μ€νμ μ§μ€μ
// -----------------------------------------------------------------------------------------
//  -contextλ κ²°κ΅­μλ μλ°μ€ν¬λ¦½νΈ κ°μ²΄μ΄λ€.
//  -contextλ μ΄κΈ°κ°μ λ°κ²λλ€. 
//  -κ°μ μμ νλλ°μ κ΄μ¬μ΄ μλ λͺ¨λ  μ»΄ν¬λνΈ μ¦, μ»¨νμ€νΈλ‘λΆν°μ κ°μ΄ νμν λͺ¨λ  μ»΄ν¬λνΈμ 
//   μ½νμ€νΈλ₯Ό μ κ³΅νλ μ­ν μ μ»΄ν¬λνΈμ΄λ€. (μλμ ν¨μ) λν μ»¨νμ€νΈμ κ°μ μλ°μ΄νΈνλ μ­ν 
//   λν νκ² λλ€. 
//  -μ΄λ₯Ό index.js μ λνν΄μ£Όλ©΄μ λͺ¨λ  μ»΄ν¬λνΈκ° μ½νμ€νΈμ μ‘μΈμ€ ν μμλλ‘ νλ€.
//  -λ°λΌμ μ΄ μ»΄ν¬λνΈλ΄μμ μ½νμ€νΈ κ°μ λ³κ²½νκ³  κ·Έ μ»¨νμ€νΈ κ°μ νλ‘λ°μ΄λλ‘ μ λ¬νλ©΄ μμ λκΈ°
//   νκ³ μλ λͺ¨λ  μ»΄ν¬λνΈλ€μ΄ μλ°μ΄νΈ λλ€.
//  -valueμ νλ‘νΌν°λ₯Ό μ΄μ©ν΄ μ΅μ κ°μ μ λ¬νλκ². μ¦κ²¨μ°ΎκΈ°μ μΆκ°λ λͺ¨μμ½μ λ°°μ΄μ μ¬κΈ°μ κ΄λ¦¬νλ€.
// -----------------------------------------------------------------------------------------
//  - μ΄ νμΌμ μΈλΆμμ λκ°μ κ°μ²΄ λͺ¨λμ μνΈμμ©μ νκ³ μ νμ¬ λκ°μ§λ₯Ό λͺ¨λ exportνκ².
//  - 
// -----------------------------------------------------------------------------------------
import { createContext } from "react";
import AllMeetups from './../pages/AllMeetups';
import { useState } from 'react';


//μ¬κΈ° μλ ν¨μλ€μ νλ μ­ν μ΄ μμ΄ μμ©μμ§λ§ μλμμ±μ μν΄ μ΄κΈ° μ½νμ€νΈμ λ΄μ©μ μ λκ².
const FavoritesContext=createContext({
   favorites: [],
   totalFavorites:0,
   addFavorite: (favoriteMeetup)=>{},
   removeFavorite:(meetupId)=>{},
   itemIsFavorite: (meetupId)=>{},
});


export const FavoritesContextProvider= (props)=>{
    const [userFavorites,setUserFavorites]=useState([]);
    const addFavoritesHandler= (favoriteMeetup)=>{
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup)
            // μ΄λ κ² ν¨μ ννλ‘ μ μ΄μ£Όλ©΄ μν μλ°μ΄νΈ ν¨μλ‘ μ λ¬ν ν¨μκ° μ¬λ°λ₯Έ μμμ μ€νμ΄λ¨
            // μ¦ λ°λ‘ μ΅μ μνλ‘ κ°λ₯ 
        }); 
    }
    const removeFavoritesHandler= (meetupId)=>{
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup => meetup.id!== meetupId);
        })
    }
    const itemIsFavoritesHandler= (meetupId)=>{
 
        return userFavorites.some(meetup => meetup.id === meetupId)
        // some ν¨μλ₯Ό μΈμλ‘ λ°μ λ°°μ΄λ΄μ κ° ν­λͺ©λ§λ€ ν¨μλ₯Ό μ€νν κ²
        // userFavorteλ΄μ meetupIdλ₯Ό κ°μ§ meetupμ΄ μμΌλ©΄ μ°Έμ λ°ν
    }
    const context= {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler,
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;