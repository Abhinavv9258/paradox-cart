import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// importing styles
import './App.css';

// exporting server URL
export const URL = process.env.REACT_APP_SERVER_URL;


const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
