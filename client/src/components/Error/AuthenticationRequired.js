import React from 'react';
import { Typography, Box } from '@mui/material';


const AuthenticationRequired = () => {
    return (
        <>
            <Box>
                <Typography variant='h4'>
                    401 - Unauthorized | Authentication Required
                </Typography>
                <Typography paragraph>
                    You need to log in to access this page.
                </Typography>
            </Box>
        </>
    );
};

export default AuthenticationRequired;