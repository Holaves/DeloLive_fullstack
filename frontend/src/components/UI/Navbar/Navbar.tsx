import React, { useState, useRef, useEffect } from 'react';
import { Form, Link } from 'react-router-dom';
import { NavItem, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import axiosRequests from '../../../classes/axiosRequests';

const Navbar = () => {
    type nameDropdown = "" | "city" | "help"

   
    const [cities, setCities] = useState <any>([])
    const [isHoverDropdown, setIsHoverDropdown] = useState <nameDropdown>("")
    const [burgerButtonEl, setburgerButtonEl] = useState <string>('') 
    const [cityTitle, setCityTitle] = useState <string>('Город')

    const liRefhelp = useRef <HTMLDivElement>(null)
    const liRefcity = useRef <HTMLDivElement>(null)
    const onMouseEventHandler = (isName: nameDropdown) => {
        setIsHoverDropdown(isName)
    }

    useEffect(() => {
        const url = "https://api.hh.ru/areas"
        axiosRequests.GET(url)
        .then(response => setCities(response))
        .catch(e => console.log(e))
    })
    return (
        <Nav className='Navbar'>
            <div className="Navbar__wrapper">
                <div className="logo"></div>
                <div className="Navlist-Telephone">
                    
                    <ul className="Navlist-Telephone__list">

                        <LinkContainer to="/">
                            <NavItem className="Navlist-Telephone__list__item">Главная</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/aboutUs">
                            <NavItem className="Navlist-Telephone__list__item">О нас</NavItem>
                        </LinkContainer>

                        <NavDropdown
                            title="Помощь"
                            style={{color: "red"}}
                            ref={liRefhelp}
                            className='Navbar-dropdown Navlist-Telephone__list__item_open'
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item>Итем1</NavDropdown.Item>
                            <NavDropdown.Item>Итем2</NavDropdown.Item>
                            <NavDropdown.Item>Итем3</NavDropdown.Item>
                            <NavDropdown.Item>Итем4</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown
                            title={cityTitle}
                            style={{color: "red"}}
                            ref={liRefcity}
                            onMouseEnter={() => onMouseEventHandler("city")} 
                            onMouseLeave={() => onMouseEventHandler("city")} 
                            className='Navbar-dropdown Navlist-Telephone__list__item_open'
                            id="basic-nav-dropdown"
                        >
                            <Form>
                                <FormControl type="text"
                                    placeholder='Поиск..'
                                    className='mr-sm-2'
                                    style={{
                                        boxShadow: 'none',
                                        border: 'none',
                                        borderBottom: '1px solid black',
                                        borderBottomLeftRadius:'0px',
                                        borderBottomRightRadius:'0px'
                                    }}
                                />
                            </Form>
                            <div className="NavDropItems">
                                <NavDropdown.Item onClick={e => setCityTitle(e.currentTarget.innerText)}>Итем1</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => setCityTitle(e.currentTarget.innerText)}>Итем2</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => setCityTitle(e.currentTarget.innerText)}>Итем3</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => setCityTitle(e.currentTarget.innerText)}>Итем4</NavDropdown.Item>
                            </div>
                        </NavDropdown>
                    </ul>
                    <h3 className="Telephone">+7 495 967 13 01</h3>

                </div>
                <Link className="Personal-nav" to='/account'>
                    <h5>Личный кабинет</h5>
                    <div className="Personal-nav__icon"></div>
                </Link>
                <div 
                    className="Burger-button"
                >
                    <div className="Burger-button__el"></div>
                    <div className="Burger-button__el"></div>
                    <div className={'Burger-button__el' + burgerButtonEl}></div>
                </div>
               
            </div>
        </Nav>
    );
};

export default Navbar;