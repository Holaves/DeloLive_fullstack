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
import { checkAuth } from './components/globalSlices/authSlice';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './store/store';
import AccountPage from './pages/AccountPage';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main/>} />
        <Route path='/news' element={<NewsPage/>} loader={NewsPageLoader} />
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<AccountPage/>}/>
      </Route>
    )
  );

  type AppDispatch = ThunkDispatch<RootState, void, any>;
  const dispatch: AppDispatch = useDispatch();

  
  useEffect(() => {
    dispatch(resize())

    if(localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
      dispatch(checkAuth())
    }
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
