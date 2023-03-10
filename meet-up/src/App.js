// -----------------------------------------------------------------------------------------
// π κ°μλ΄μ©μ€ μ€μλΆλΆ μ²΄ν¬
// β­οΈ μ§μ€νμ μ§μ€μ
// -----------------------------------------------------------------------------------------
// - layout μ»΄ν¬λνΈλ‘ λ¬ΆμΌλ©΄μ μμ λ€μ΄κ°μλ λ΄μ­λ€μ΄ μμμ Layout μ»΄ν¬λνΈλ‘ μ΄λν¨
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
