import {Routes,Route} from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Favorite from './pages/Favourite';
import NavBar from './components/NavBar'; 

function App() {

  return(
    <div className="App">
      <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Favorite" element={<Favorite/>}/>
          </Routes>
        </main>
    </div>
  )
}

export default App
