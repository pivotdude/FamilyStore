import React, {useEffect} from 'react';
import './App.scss';
import MainPage from './pages/Main/MainPage'
import {BrowserRouter, Routes , Route} from "react-router-dom";
import {ProductModel, NewsModel} from "./Models";
import NewsList from "./pages/News/NewsList";
import About from "./pages/About/About";
import './App.scss'
import Support from "./pages/Support/Support";
import Authorization from "./pages/Authorization/Authorization";
import Cart from './pages/Cart/Cart'
import products from "./Products";
import ResultPage from "./pages/PageResults/ResultPage";
import NavigationAndButton from "./components/NavBars/NavigationAndButton";
import Registration from "./pages/Authorization/Registration";
import Profile from './pages/Profile/Profile'
import Notification from "./components/Notification/Notification";
import ErrorNotifications from "./components/Notification/ErrorNotifications";
import SubmitNotifications from "./components/Notification/SubmitNotifications";

function App() {

    let login = localStorage.getItem("login")
    if (login) {
        console.log(login)
        console.log('Logginin')
    } else {
        console.log('unloginin')
    }


  return (
      <div className='App'>
        <BrowserRouter>


            <header>
                <NavigationAndButton />
            </header>

            <main>
              <Routes>
                <Route path='' element={<MainPage />} />
                  <Route path='/products/search/:searchName' element={<ResultPage />} />
                  <Route path='/news' element={<NewsList />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/support' element={<Support />} />
                  <Route path='/authorization' element={<Authorization />} />
                  <Route path='/registration' element={<Registration />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/cart' element={<Cart products={products} />} />
              </Routes>
                <div className='notifications'>
                    <ErrorNotifications />
                    <SubmitNotifications />
                </div>
            </main>


        </BrowserRouter>
      </div>
  );
}

export default App;
