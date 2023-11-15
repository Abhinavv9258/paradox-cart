import React from 'react';
import { Typography, Box } from '@mui/material';


const AuthorizationRequired = () => {
    return (
        <>
            <Box>
                <Typography variant='h4'>
                    403 - Forbidden | Authorization Required
                </Typography>
                <Typography paragraph>
                    You do not have the necessary permissions to access this page.
                </Typography>
            </Box>
        </>
    );
};

export default AuthorizationRequired;