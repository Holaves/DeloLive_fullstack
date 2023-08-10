import React, { useState, useEffect } from 'react';
import InsuranceComp from '../components/InsuranceComp';
import SpeciesInsurance from '../components/SpeciesInsurance';
import TriggersList from '../components/TriggersList';
import OfferItemType from '../types/OfferItem';
import axiosRequests from '../classes/axiosRequests';
import { useSelector } from 'react-redux';
import { selectWidth } from '../components/globalSlices/windowWidthSlice';
import AboutUs from '../components/AboutUs';
import News from '../components/News';
import SpecialOffers from '../components/SpecialOffers';
import UsefulButtons from '../components/UsefulButtons';
import { API_URL } from '../http';

const Main = () => {
    let windowWidth = useSelector(selectWidth)
    const [offersList, setOffersList] = useState <OfferItemType[]>([])
   
    useEffect(() => {
        axiosRequests.GET<OfferItemType>(`${API_URL}/offers`)
        .then(response => setOffersList(response))
        .catch(e => console.log(e))
    }, [])
    return (
        <div style={{overflowX:'hidden'}}>
            <div className="_container-1">
               <TriggersList/>
               <InsuranceComp/>
               {
                windowWidth > 792 ?
                    <SpeciesInsurance/> : 
                    <div/>
               }
               {
                windowWidth > 990 ?
                    <AboutUs/> : 
                    <div/>
               }
               {
                windowWidth < 768 ?
                    <SpecialOffers offersList={offersList} /> :
                    <div/>
               }
                <News/>
                <UsefulButtons/>

            </div>
        </div>
    );
};

export default Main;