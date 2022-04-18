import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar.js'
import  DogBreeds  from './components/DogBreeds';
import  CatsBreed  from './components/CatsBreed';
import {Mainpage} from './components/mainpage.js';
import Basket from './components/Basket.js'
import Breeds from './components/Breeds';
import LoginMain from './components/LoginMain';


function App() {
  let pass = sessionStorage.getItem("home");
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Mainpage/>}/>
          <Route exact path='/login' element={<LoginMain/>}/>
          <Route exact path='/cart' element={<Basket/>}/>
          <Route exact path='/dogbreed' element={<DogBreeds/>}  />
          <Route  exact path='/catbreed'  element={<CatsBreed/>}  />
        </Routes>
      </Router>
      <Breeds/>
    </>
  );
}

export default App;
