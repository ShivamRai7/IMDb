import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element = {<Home />}></Route>
            <Route path="movie/:id" element = {<MovieDetail />}></Route>
            <Route path="movies/:type" element = {<MovieList />}></Route>
            <Route path="/*" element = {<h1>Some error occurred</h1>}></Route>
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
