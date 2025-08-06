import './css/App.css';
import Favorites from './pages/favorites';
import Home from './pages/home';
import Navbar from './component/navbar';  
import { Routes,Route } from 'react-router-dom';
import { MovieProvider } from './context/moviecontext';



function App() {

  return (
    <MovieProvider>
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
   
  )
}

export default App;
