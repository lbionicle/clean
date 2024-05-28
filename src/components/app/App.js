import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Authorization, Booking, MainPage, UserApplications, UserPersonal } from '../pages';

import './App.scss';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Authorization/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/user-info' element={<UserPersonal/>}/>
          <Route path='/user-applications' element={<UserApplications/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
