import styled from 'styled-components';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Portfolio} from "./components/Portfolio";
import {Store} from "./components/Store";
import {Blog} from "./components/Blog/Blog";
import {Contacts} from "./components/Contacts";
import {Statistics} from "./components/Statistics";
import {Footer} from "./components/Footer";
import {Services} from "./components/Services/Services";
import React from "react";
import {Outlet, RouterProvider} from "react-router-dom";
import {router} from "./router";

export const App = () => {
    return (
        <Wrapper>
            <Header/>
            {/*<Home/>*/}
            {/*<About/>*/}
            {/*<Services/>*/}
            {/*<Portfolio/>*/}
            {/*<Store/>*/}
            {/*<Blog/>*/}
            <Outlet/>
            <Statistics/>
            <Contacts/>
            <Footer/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 1920px;
    width: 100%;
    //border: 2px solid red;
    margin: 0 auto;
    position: relative;
`;

export const StartPageWrappper = () => {
    return (
        <>
            <Home/>
            <About/>
            <Services/>
            <Portfolio/>
            <Store/>
            <Blog/>
        </>
    )
}

export const AboutPageWrappper = () => {
    return (
        <>

        </>
    )
}