import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=21442a68a59560e5718b0126dadf94b0&targetDt=20210510&itemPerPage=5").then((response)=>{
      const moviesList=response.data.boxOfficeResult.dailyBoxOfficeList;
      console.log(moviesList);
      const movies=[]
      for(const key in moviesList){
        const movie={
          id: key,
          ...moviesList[key]
        }

        movies.push(movie);
      }
      setData(movies)
    })
    // fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=21442a68a59560e5718b0126dadf94b0&targetDt=20210510&itemPerPage=5").then(
    //   (response)=>{
    //     //console.log(response)
    //     return response.json()
    //   }
    // ).then(answer=>{
    //   const moviesList=answer.boxOfficeResult.dailyBoxOfficeList
    //   const movies=[]
    //   console.log(movies);
    //   for(const key in moviesList){
    //     const movie={
    //       id: key,
    //       ...moviesList[key]
    //     }

    //     movies.push(movie);
    //   }
      
    //   setData(movies);
    // })
  },[])

  return (
    <div className="App">
      {data.map(it=> <div key={it.id}>{it.rnum} {it.movieNm}</div>
      )}
    </div>
  );
}

export default App;
