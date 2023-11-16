import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbar = ({ children }) => {
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderRadius: '5px',
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const renderTrack = ({ style, ...props }) => {
        const trackStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
        };
        return <div style={{ ...style, ...trackStyle }} {...props} />;
    };

    return (
        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            renderThumbVertical={renderThumb}
            renderTrackVertical={renderTrack}
        >
            {children}
        </Scrollbars>
    );
};

export default CustomScrollbar;
