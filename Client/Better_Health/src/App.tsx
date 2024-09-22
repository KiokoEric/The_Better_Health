import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Login from './Pages/User/Login/Login';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import EditWorkout from './Pages/EditWorkout/EditWorkout';
import { useGetUserID } from './Components/Hooks/useGetUserID';
import ErrorBoundary from './Pages/ErrorBoundary/ErrorBoundary';
const WorkoutPage = React.lazy(() => import('./Pages/Workout/Workout'))
const FitnessPage = React.lazy(() => import('./Pages/Fitness/Fitness'))
const DetailsPage = React.lazy(() => import('./Pages/Details/Details'))
const ExercisePage = React.lazy(() => import('./Pages/Exercise/Exercise'))
const ProfilePage = React.lazy(() => import('./Pages/User/Profile/Profile'))
const CustomisePage = React.lazy(() => import('./Pages/Customise/Customise'))
const NutritionPage = React.lazy(() => import('./Pages/Nutrition/Nutrition'))
const FavouritesPage = React.lazy(() => import('./Pages/Favourites/Favourites'))
const EditProfilePage = React.lazy(() => import('./Pages/User/EditProfile/EditProfile'))
const RegistrationPage = React.lazy(() => import('./Pages/User/Registration/Registration'))
const WorkoutDetailsPage = React.lazy(() => import('./Pages/WorkoutDetails/WorkoutDetails'))
const DeleteProfilePage = React.lazy(() => import('./Pages/User/DeleteProfile/DeleteProfile'))

function App() {

  const ID = useGetUserID()

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={ <Login /> }/>
          <Route path='/Registration' element={<React.Suspense><RegistrationPage /></React.Suspense>}/>
          <Route path='/Home' element={ID ? <React.Suspense><Home /></React.Suspense> : <ErrorBoundary />} />
          <Route path='/Edit/:_id' element={ID ? <React.Suspense><EditWorkout /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/MyWorkout' element={ID ? <React.Suspense><WorkoutPage /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/Exercise' element={ID ? <React.Suspense><ExercisePage /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/Nutrition' element={ID ? <React.Suspense><NutritionPage /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/Workout/:id' element={ID ? <React.Suspense><DetailsPage /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/Customise' element={ID ? <React.Suspense><CustomisePage /></React.Suspense> : <ErrorBoundary />} />
          <Route path='/Favourites' element={ID ? <React.Suspense><FavouritesPage /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/Profile/:userID' element={ID ? <React.Suspense><ProfilePage /></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/DeleteProfile' element={ID ? <React.Suspense><DeleteProfilePage/></React.Suspense> : <ErrorBoundary />}/>
          <Route path='/Fitness_Calculator' element={ID ? <React.Suspense><FitnessPage /></React.Suspense> : <ErrorBoundary />} />
          <Route path='/EditProfile/:userID' element={ID ? <React.Suspense><EditProfilePage/> </React.Suspense> : <ErrorBoundary />}/>
          <Route path='/WorkoutDetails/:_id' element={ID ? <React.Suspense><WorkoutDetailsPage /></React.Suspense> : <ErrorBoundary />}/>
        </Routes>
      
    </>
  )
}

export default App