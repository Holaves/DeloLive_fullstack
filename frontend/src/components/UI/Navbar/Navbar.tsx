import React, { useState, useRef, useEffect, ChangeEventHandler } from 'react';
import { Form, Link } from 'react-router-dom';
import { NavItem, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import axiosRequests from '../../../classes/axiosRequests';
import Loader from '../Loader/Loader';
import HelpItem from '../../../types/HelpItem';
import { API_URL } from '../../../http';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../globalSlices/authSlice';

const Navbar = () => {
    type nameDropdown = "" | "city" | "help"
    type need = 0 | 1
    type cityType = {
        id: number,
        title: string,
        area?: string;
        region?: string
    }

    const isAuth = useSelector(selectIsAuth)

    const [citiesValue, setCitiesValue] = useState <string>("")

    const [cities, setCities] = useState <cityType[]>([])
    const [helps, setHelps] = useState <HelpItem[]>([])

    const [isHoverDropdown, setIsHoverDropdown] = useState <nameDropdown>("")
    const [burgerButtonEl, setburgerButtonEl] = useState <string>('') 
    const [cityTitle, setCityTitle] = useState <string>('Город')
    
    const [firstCounter, setFirstCounter] = useState <number>(0);
    const [sendTime, setSendTime] = useState <number>(1);
    const [intervalId, setIntervalId] = useState <any>(null);
    const [isLoading, setIsLoading] = useState <boolean>(false)

    const liRefhelp = useRef <HTMLDivElement>(null)
    const liRefcity = useRef <HTMLDivElement>(null)

    let counter = 0

    const onMouseEventHandler = (isName: nameDropdown) => {
        setIsHoverDropdown(isName)
    }
    const getCities = (need: need) => {
        console.log('send cities now')
        axiosRequests.GET<cityType>(`${API_URL}/cities?q=${citiesValue}&need=${need}`)
        .then(response => setCities(response))
        .then(response => console.log(response))
        .catch(e => console.log(e))
    }
    const changeCitiesHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setCitiesValue(inputValue)

        counter = 0
        clearInterval(intervalId);
        
        setIntervalId(setInterval(() => {
            counter = counter + 0.5
            if (counter === sendTime) {
                clearInterval(intervalId);
                setIsLoading(false)
                inputValue ? getCities(1) : getCities(0)
                return
            }
            else if(!isLoading){
                setIsLoading(true)
            }
        }, 500));

    }

    useEffect(() => {
        if(firstCounter === 0){
            getCities(0)
            setFirstCounter(firstCounter + 1)

            axiosRequests.GET<HelpItem>(`${API_URL}/helps`)
            .then(response => setHelps(response))
            .catch(e => console.log(e))
        }
        return () => clearInterval(intervalId);
    }, [intervalId])
    return (
        <Nav className='Navbar'>
            <div className="Navbar__wrapper">
                <div className="logo"></div>
                <div className="Navlist-Telephone">
                    
                    <ul className="Navlist-Telephone__list">

                        <LinkContainer to="/">
                            <NavItem className="Navlist-Telephone__list__item text-focus-in">Главная</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/aboutUs">
                            <NavItem className="Navlist-Telephone__list__item text-focus-in">О нас</NavItem>
                        </LinkContainer>
                        
      
                        <NavDropdown
                            title={"Помощь"}
                            style={{color: "red"}}
                            ref={liRefhelp}
                            className="Navbar-dropdown Navlist-Telephone__list__item_open text-focus-in"
                            id="basic-nav-dropdown"
                        >
                            <div className="Nav-dropdown-content">
                                <NavDropdown.Item>Итем1</NavDropdown.Item>
                                <NavDropdown.Item>Итем2</NavDropdown.Item>
                                <NavDropdown.Item>Итем3</NavDropdown.Item>
                                <NavDropdown.Item>Итем4</NavDropdown.Item>
                            </div>
                        </NavDropdown>
                        
                        <NavDropdown
                            title={cityTitle}
                            ref={liRefcity}
                            onMouseEnter={() => onMouseEventHandler("city")} 
                            onMouseLeave={() => onMouseEventHandler("city")}
                            onClick={() => onMouseEventHandler("city")}
                            className="Navbar-dropdown Navlist-Telephone__list__item_open text-focus-in"
                            id="basic-nav-dropdown"
                        >
                            <Form>
                                <FormControl type="text"
                                    placeholder='Поиск..'
                                    className='mr-sm-2'
                                    spellCheck={false}
                                    onChange={changeCitiesHandler}
                                    value={citiesValue}
                                    style={{
                                        boxShadow: 'none',
                                        border: 'none',
                                        borderBottom: '1px solid black',
                                        borderBottomLeftRadius:'0px',
                                        borderBottomRightRadius:'0px'
                                    }}
                                />
                                
                            </Form>
                            <div className="NavDropItems"
                            style={isLoading ? {overflowY: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}
                             : {}}
                            >
                                {
                                    !isLoading ?
                                    cities.map((item: cityType) =>
                                        <NavDropdown.Item
                                            onClick={e => setCityTitle(e.currentTarget.innerText)}
                                        >
                                            {item.title}
                                        </NavDropdown.Item>
                                    )
                                    :
                                    <Loader width={84} height={50}/>
                                }
                            </div>
                        </NavDropdown>
                    </ul>
                    <h3 className="Telephone">+7 495 967 13 01</h3>

                </div>
                <Link className="Personal-nav" to={ !isAuth ? '/registration' : '/account'}>
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