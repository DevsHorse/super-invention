import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import AddNewPage from "./pages/AddNewPage";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/cards" element={ <CardsPage /> } />
        <Route path="/add" element={ <AddNewPage /> } />
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
    </>
  );
}

export default App;
