import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Exercise from './Pages/Exercise/Exercise';
import Nutrition from './Pages/Nutrition/Nutrition';
import Fitness from './Pages/Fitness/Fitness';
import Customise from './Pages/Customise/Customise';
import Workout from './Pages/Workout/Workout';
import Login from './Pages/User/Login/Login';
import Profile from './Pages/User/Profile/Profile';
import Registration from './Pages/User/Registration/Registration';
import DeleteProfile from './Pages/User/DeleteProfile/DeleteProfile';
import EditProfile from './Pages/User/EditProfile/EditProfile';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Exercise' element={<Exercise />} />
        <Route path='/Nutrition' element={<Nutrition />} />
        <Route path='/Fitness_Calculator' element={<Fitness />} />
        <Route path='/Customise' element={<Customise />} />
        <Route path='/MyWorkout' element={<Workout />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/DeleteProfile' element={<DeleteProfile />} />
        <Route path='/MyProfile' element={<Profile />} />
        <Route path='/EditProfile' element={<EditProfile />} />
      </Routes>
    </>
  )
}

export default App
