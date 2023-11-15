import React from 'react';
import { Typography, Box } from '@mui/material';


const NotFound = () => {
    return (
        <>
            <Box className='app-container'>
                {/* <Navbar  /> */}
                <Box style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '56vh' }}>
                    <Typography variant='h4'>404 - Not Found | Page Not Found</Typography>
                    <Typography paragraph>The requested page could not be found.</Typography>
                </Box>
                {/* <Footer /> */}
            </Box>
        </>
    );
};

export default NotFound;