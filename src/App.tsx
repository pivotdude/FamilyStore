import React from 'react';
import './App.scss';
import MainPage from './pages/Main/MainPage'
import {BrowserRouter, Routes , Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import {ProductModel, NewsModel} from "./Models";
import NewsList from "./pages/News/NewsList";
import About from "./pages/About/About";
import './App.scss'
import HideNavBar from "./components/HideNavBar";
import Support from "./pages/Support/Support";
import Authorization from "./pages/Authorization/Authorization";
import Cart from './pages/Cart/Cart'
import products from "./Products";

function App() {

    console.log(JSON.stringify(products))


    let news: Array<NewsModel> = [
        {id: 1, title: 'О насм ип и', content: 'ОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра ОСмочоОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рыврарапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра', date: '20.08.2022', image: 'https://img2.freepng.ru/20180711/qkj/kisspng-organization-buildi-we-are-open-5b46be52b96052.2387322915313628987593.jpg'},
        {id: 2, title: 'О насм ип и', content: 'ОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра ОСмоОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рыврачорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра', date: '20.08.2022', image: 'https://img2.freepng.ru/20180711/qkj/kisspng-organization-buildi-we-are-open-5b46be52b96052.2387322915313628987593.jpg'},
        {id: 3, title: 'О насм ип и', content: 'ОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра ОСмОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывраочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра', date: '20.08.2022', image: 'https://img2.freepng.ru/20180711/qkj/kisspng-organization-buildi-we-are-open-5b46be52b96052.2387322915313628987593.jpg'},
        {id: 4, title: 'О насм ип и', content: 'ОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра ОСмочОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рыврарапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра', date: '20.08.2022', image: 'https://img2.freepng.ru/20180711/qkj/kisspng-organization-buildi-we-are-open-5b46be52b96052.2387322915313628987593.jpg'},
        {id: 5, title: 'О насм ип и', content: 'ОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра ОСмочОСмочорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывраорапрр ыврп рыврп рывар рывар рфыар ыфра рвырар вырар ывра рывра', date: '20.08.2022', image: 'https://img2.freepng.ru/20180711/qkj/kisspng-organization-buildi-we-are-open-5b46be52b96052.2387322915313628987593.jpg'},
        ]
  return (
      <div className='App'>

        <BrowserRouter>
            <header style={{width: '70%', margin: '0 auto'}}>
                <HideNavBar />
                <NavBar />
            </header>

          <Routes>
            <Route path='' element={<MainPage products={products} />} />
              <Route path='/news' element={<NewsList news={news} />} />
              <Route path='/about' element={<About />} />
              <Route path='/support' element={<Support />} />
              <Route path='/authorization' element={<Authorization />} />
              <Route path='/cart' element={<Cart products={products} />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
