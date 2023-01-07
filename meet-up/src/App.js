
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div className="App">
      <MainNavigation/>
  <Routes>
    <Route path='/' element={<AllMeetups/>}/>
    <Route path='/Favorites' element={<Favorites/>}/>
    <Route path='/new-meet' element={<NewMeetup/>}/>
  </Routes>
    </div>
  );
}

export default App;
