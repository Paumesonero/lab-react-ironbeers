import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/:beerId' element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
