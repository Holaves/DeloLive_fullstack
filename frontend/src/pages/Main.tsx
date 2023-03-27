import React from 'react';
import InsuranceComp from '../components/InsuranceComp';
import SpeciesInsurance from '../components/SpeciesInsurance';
import TriggersList from '../components/TriggersList';
import { useSelector } from 'react-redux';
import { selectWidth } from '../components/globalSlices/windowWidthSlice';
import AboutUs from '../components/AboutUs';
import News from '../components/News';

const Main = () => {
    let windowWidth = useSelector(selectWidth)
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
                windowWidth > 792 ?
                    <News/> : 
                    <div/>
               }

            </div>
        </div>
    );
};

export default Main;