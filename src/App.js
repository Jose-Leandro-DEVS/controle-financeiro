import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';
import Global from './styles/global';
const App = () => {
    const data = localStorage.getItem("transactions");
    
    return(
        <>
            <Header />
            <Resume />
            <Global />
            <Form />
        </>
    );
};

 
export default App;

