import styled from 'styled-components';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Services} from "./components/Services";
import {Portfolio} from "./components/Portfolio";
import {Store} from "./components/Store";
import {Blog} from "./components/Blog/Blog";
import {Contacts} from "./components/Contacts";
import {Statistics} from "./components/Statistics";
import {Footer} from "./components/Footer";


export const App = () => {
    return (
        <Wrapper>
            <Header/>
            <Home/>
            <About/>
            <Services/>
            <Portfolio/>
            <Store/>
            <Blog/>
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

