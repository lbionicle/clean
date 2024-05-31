import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, AdminApplications, AdminClients, AdminPersonal, AdminServices, Authorization, Booking, MainPage, UserApplications, UserPersonal } from '../pages';

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
          <Route path='/admin-info' element={<AdminPersonal/>}/>
          <Route path='/admin-clients' element={<AdminClients/>}/>
          <Route path='/admin-applications' element={<AdminApplications/>}/>
          <Route path='/admin-services' element={<AdminServices/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
