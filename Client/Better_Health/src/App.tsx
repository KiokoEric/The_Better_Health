import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
const ExercisePage = React.lazy(() => import('./Pages/Exercise/Exercise'))
const NutritionPage = React.lazy(() => import('./Pages/Nutrition/Nutrition'))
const FitnessPage = React.lazy(() => import('./Pages/Fitness/Fitness'))
const CustomisePage = React.lazy(() => import('./Pages/Customise/Customise'))
const WorkoutPage = React.lazy(() => import('./Pages/Workout/Workout'))
const RegistrationPage = React.lazy(() => import('./Pages/User/Registration/Registration'))
const LoginPage = React.lazy(() => import('./Pages/User/Login/Login'))
const ProfilePage = React.lazy(() => import('./Pages/User/Profile/Profile'))
const EditProfilePage = React.lazy(() => import('./Pages/User/EditProfile/EditProfile'))
const DeleteProfilePage = React.lazy(() => import('./Pages/User/DeleteProfile/DeleteProfile'))


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Exercise' element={ <React.Suspense><ExercisePage /> </React.Suspense> } />
        <Route path='/Nutrition' element={ <React.Suspense><NutritionPage /> </React.Suspense> } />
        <Route path='/Fitness_Calculator' element={ <React.Suspense><FitnessPage /> </React.Suspense> } />
        <Route path='/Customise' element={<React.Suspense><CustomisePage /> </React.Suspense>} />
        <Route path='/MyWorkout' element={<React.Suspense><WorkoutPage /> </React.Suspense>} />
        <Route path='/Login' element={ <React.Suspense><LoginPage/> </React.Suspense> }/>
        <Route path='/Registration' element={ <React.Suspense><RegistrationPage /> </React.Suspense> } />
        <Route path='/Profile' element={ <React.Suspense><ProfilePage/> </React.Suspense> }/>
        <Route path='/EditProfile' element={ <React.Suspense><EditProfilePage/> </React.Suspense> }/>
        <Route path='/Delete' element={ <React.Suspense><DeleteProfilePage/> </React.Suspense> }/>
      </Routes>
    </>
  )
}

export default App
