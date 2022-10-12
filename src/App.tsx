import React from 'react';
import './App.scss';
import MainPage from './pages/Main/MainPage'
import {BrowserRouter, Routes , Route} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<MainPage />} />
              {/*<Route path='/news' element={<MainPage />} />*/}
              {/*<Route path='/about' element={<MainPage />} />*/}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
