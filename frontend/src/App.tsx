import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.css'
import Navbar from './components/UI/Navbar/Navbar';
import Main from './pages/Main';
import { useDispatch } from 'react-redux';
import { resize } from './components/globalSlices/windowWidthSlice';
import { scrolling } from './components/globalSlices/scroll';
import { useEffect } from 'react';
import Footer from './components/UI/Footer/Footer';
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider
 } from 'react-router-dom';
import NewsPage, { NewsPageLoader } from './pages/NewsPage';
import Registration from './pages/Registration';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main/>} />
        <Route path='/news' element={<NewsPage/>} loader={NewsPageLoader} />
        <Route path='/registration' element={<Registration/>}/>
      </Route>
    )
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(resize())
  })

  window.addEventListener('resize', () => {
      dispatch(resize())
  }, true);
  window.addEventListener('scroll', () => {
      dispatch(scrolling())
}, true);

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return(
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
