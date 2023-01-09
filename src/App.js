
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import DetailPage from "./pages/DetailPage/DetailPage";
import DetailActors from "./pages/DetailActors";
import {useState} from "react";
import SearchResult from "./pages/SearchResult";

function App() {
  const [mode ,setMode] =useState(JSON.parse(localStorage.getItem("mode")) || false)

  const changeTheme = (mode) => {
    setMode(!mode)

    localStorage.setItem("mode" ,JSON.stringify(!mode))
  }

  return (
    <div className="App" style={{
      background: mode ? "rgb(23,21,21)" : "",
      color: mode ? "white" : ""
    }}>
    <Header changeTheme={changeTheme} mode={mode}/>

      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/popular"} element={<Popular/>}/>
        <Route path={"/top-rated"} element={<TopRated/>}/>
        <Route path={"/movies/movie-detail/:movieId"} element={<DetailPage/>}/>
        <Route path={"/actors/actor-detail/:castId"} element={<DetailActors/>}/>
        <Route path={"/movies/search-results/:moviesName"} element={<SearchResult/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
