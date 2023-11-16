import React from 'react';

import {
    Box,
    useScrollTrigger,
    Fab,
    Fade
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { scroller } from 'react-scroll';


const ScrollTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            scroller.scrollTo(anchor.id, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Fade>
    );
}


export default ScrollTop;