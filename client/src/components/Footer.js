import React from 'react';

import {
    Box,
    // FormControl,
    // InputLabel,
    // Input,
    // Button,
    Typography,
    Container
} from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Footer.css';


const Footer = () => {
    return (
        <>
            <footer id='footer' className={`footer-1`}>
                <Box className='main-footer widgets-dark typo-light'>
                    <Container>

                    </Container>
                    <Container className='footer-copyright'>
                            <Box className='row'>
                                <Box className='col-md-12 text-center' >
                                    <Typography paragraph>
                                        Copyright Abhinav Verma © 2023. All rights reserved.
                                    </Typography>
                                </Box>
                            </Box>
                    </Container>
                </Box>
            </footer>
        </>
    );
};

export default Footer;