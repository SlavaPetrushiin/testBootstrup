import React, {useEffect} from 'react';
import './App.css';
import Gallery from "./components/Gallery";
import {fetchDataPage} from "./redux/galleryPageReducer";
import {useDispatch} from "react-redux";
import ContainerDescription from "./components/Description";
import FormContacts from "./components/FormContacts";
import Header from "./components/Header";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataPage())
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <Gallery/>
                <ContainerDescription/>
                <FormContacts/>
            </div>
        </>

    );
}

export default App;
