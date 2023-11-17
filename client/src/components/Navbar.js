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

import Logo from '../assets/images/logo.png'

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
                <img src={Logo} style={{ height: '50px', width: '50px' }} />
                Paradox Cart
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
            </List>
        </Box>
    );

    return (
        <>
            <CssBaseline />
            <AppBar component="nav" sx={{ color: '#F0B05D', backgroundColor: '#F0B05D' }}>
                <Toolbar>
                    <IconButton
                        // color="inherit"
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
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
                    >
                        <img src={Logo} style={{height:'50px', width:'50px'}} />
                        Paradox Cart
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
                        <Button sx={{ color: '#fff' }}>
                            LogIn/SignUp
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