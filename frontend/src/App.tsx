import React from 'react';
import './App.css'
import Navbar from './components/UI/Navbar/Navbar';
import Main from './pages/Main';
import { useDispatch } from 'react-redux';
import { resize } from './components/globalSlices/windowWidthSlice';
import { scrolling } from './components/globalSlices/scroll';
import { useEffect } from 'react';
import Footer from './components/UI/Footer/Footer';

function App() {
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
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
