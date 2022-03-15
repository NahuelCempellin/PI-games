import './App.css';
import Home from '../src/Components/Home/home';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/landingPage';
import GameDetail from './Components/GameDetail/gameDetail'
import Forms from './Components/Form/form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/videogames' element={<Home/>}/>
        <Route exact path= '/videogames/:id' element={<GameDetail/>}/>
        <Route exact path='/newgame' element={<Forms/>}/>
      </Routes>
    </div>
  );
}

export default App;
