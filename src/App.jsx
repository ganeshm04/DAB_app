import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Login from './Pages/Login'
import MyAppointments from './Pages/MyAppointments'
import MyProfile from './Pages/MyProfile'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="mx-4 sm:mx-[6%]">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        {/* <Route path='/DAB_app' element={<Home />} /> */}
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
