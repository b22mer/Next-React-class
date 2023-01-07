// -----------------------------------------------------------------------------------------
// 📌 강의내용중 중요부분 체크
// ⭐️ 집중하자 집중을
// -----------------------------------------------------------------------------------------
// - layout 컴포넌트로 묶으면서 안에 들어가있는 내역들이 알아서 Layout 컴포넌트로 이동함
// -----------------------------------------------------------------------------------------

import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    
  <Layout>
  <Routes>
    <Route path='/' element={<AllMeetups/>}/>
    <Route path='/Favorites' element={<Favorites/>}/>
    <Route path='/new-meet' element={<NewMeetup/>}/>
  </Routes>
  </Layout>
  );
}

export default App;
