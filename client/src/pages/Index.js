import React from 'react';

import { Box } from '@mui/material';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section1 from '../components/IndexContent/Section1';
import Section2 from '../components/IndexContent/Section2';
import Section3 from '../components/IndexContent/Section3';
import Section4 from '../components/IndexContent/Section4';

import { Element } from 'react-scroll';



const Index = () => {
    return (
        <>
            <Box className='app-container'>
                <Navbar />
                <Element name="section1">
                    <Section1 />
                </Element>
                <Element name="section2">
                    <Section2 />
                </Element>
                <Element name="section3">
                    <Section3 />
                </Element>
                <Element name="section4">
                    <Section4 />
                </Element>
                <Footer />
            </Box>
        </>
    );
};

export default Index;