import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Exercise from './Pages/Exercise/Exercise';
import Nutrition from './Pages/Nutrition/Nutrition';
import Fitness from './Pages/Fitness/Fitness';
import Customise from './Pages/Customise/Customise';

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
      </Routes>
    </>
  )
}

export default App
