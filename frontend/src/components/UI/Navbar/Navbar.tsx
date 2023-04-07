import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [burgerButtonEl, setburgerButtonEl] = useState <string>('') 
    const [burgerMenuToggle, setBurgerMenuToggle] = useState <boolean>(false)

    const BurgerMenuToggle = () => {
        if(!burgerMenuToggle)
        {
            setBurgerMenuToggle(true)
            setburgerButtonEl('_active')
        }
        else
        {
            setBurgerMenuToggle(false)
            setburgerButtonEl('')
        }
    }

    return (
        <nav className='Navbar'>
            <div className="Navbar__wrapper">
                <div className="logo"></div>
                <div className="Navlist-Telephone">
                    
                    <ul className="Navlist-Telephone__list">
                        <li className="Navlist-Telephone__list__item"><Link to="/" className='Navlist-Telephone__list__item'>Главная</Link></li>
                        <li className="Navlist-Telephone__list__item"><Link to="/aboutUs" className='Navlist-Telephone__list__item'>О нас</Link></li>
                        <li className='Navlist-Telephone__list__item_open' onClick={() => {}}>
                            <h4 className="Navlist-Telephone__list__item_open__text">Помощь</h4>
                            <div className="Navlist-Telephone__list__item_open__openIcon"></div>
                        </li>
                        <li className='Navlist-Telephone__list__item_open' onClick={() => {}} >
                            <h4 className="Navlist-Telephone__list__item_open__text" id='City-nav'>Санкт-Петербург</h4>
                            <div className="Navlist-Telephone__list__item_open__openIcon"></div>
                        </li>
                    </ul>
                    <h3 className="Telephone">+7 495 967 13 01</h3>

                </div>
                <Link className="Personal-nav" to='/account'>
                    <h5>Личный кабинет</h5>
                    <div className="Personal-nav__icon"></div>
                </Link>
                <div 
                    className="Burger-button"
                    onClick={BurgerMenuToggle}
                >
                    <div className="Burger-button__el"></div>
                    <div className="Burger-button__el"></div>
                    <div className={'Burger-button__el' + burgerButtonEl}></div>
                </div>
               
            </div>
        </nav>
    );
};

export default Navbar;