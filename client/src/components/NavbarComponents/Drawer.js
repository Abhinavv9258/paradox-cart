import React from 'react';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';

const drawer = ({ handleDrawerToggle, handleSectionClick }) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='About' />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={handleDrawerToggle} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Contact' />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => handleSectionClick('section1')} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Section1' />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => handleSectionClick('section2')} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Section2' />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => handleSectionClick('section3')} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Section3' />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => handleSectionClick('section4')} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Section4' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default drawer;