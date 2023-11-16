import React from 'react';

import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import ScrollTop from './ScrollTop';

const drawerWidth = 240;

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleSectionClick = (sectionId) => {
        navigate('/');
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: mobileOpen ? -56 : -65,
        });
        setMobileOpen(false);
    };
    const drawer = (
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

    return (
        <>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        <Button onClick={() => handleSectionClick('section1')} sx={{ color: '#fff' }}>
                            Section1
                        </Button>
                        <Button onClick={() => handleSectionClick('section2')} sx={{ color: '#fff' }}>
                            Section2
                        </Button>
                        <Button onClick={() => handleSectionClick('section3')} sx={{ color: '#fff' }}>
                            Section3
                        </Button>
                        <Button onClick={() => handleSectionClick('section4')} sx={{ color: '#fff' }}>
                            Section4
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <ScrollTop />
        </>
    );
};


export default Navbar;