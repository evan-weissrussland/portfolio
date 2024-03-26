import styled from 'styled-components';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {About, aboutMeStack} from "./components/About";
import {Portfolio} from "./components/Portfolio";
import {Store} from "./components/Store";
import {Blog} from "./components/Blog/Blog";
import {Contacts} from "./components/Contacts";
import {Statistics} from "./components/Statistics";
import {Footer} from "./components/Footer";
import {Services} from "./components/Services/Services";
import React from "react";
import {Outlet} from "react-router-dom";
import {Container} from "./components/assets/Container";
import avaAboutMe from './images/Mask-Group.webp'
import {AboutMeDescription} from "./components/AboutWrapper";

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
        <AboutWrapperSection>
            <Container $width={'1350px'}>
                <AboutMe>
                    <p>Hello, I’m <span>Graphic Designer</span> & Ceo of Graphic Type. I love to provide quality works.
                    </p>
                    <img src={avaAboutMe} alt="ava"/>
                </AboutMe>
                <MyStory>
                    <h2>
                        My Story
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor viverra purus sit mauris. Lacus
                        sit mauris cursus congue pellentesque quis a mi tortor. Lobortis consequat mi ultrices
                    </p>
                    <br/>
                    <p>
                        Ipsum dolor sit amet, consectetur adipiscing elit. Auctor viverra purus sit mauris. Lacus sit
                        mauris cursus congue pellentesque quis a mi tortor. Lobortis consequat mi ultrices laoreet
                        pretium, tortor in pretium egestas. Duis dolor auctor fringilla integer mauris, id pellentesque
                        et.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor viverra purus sit mauris. Lacus
                        sit mauris cursus congue pellentesque quis a mi tortor. Lobortis consequat mi ultrices
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor viverra purus sit mauris.
                    </p>
                </MyStory>
                <MediaContent>
                    <h2>
                        60 second video clip about me
                    </h2>
                    <video src="#"></video>
                </MediaContent>
                <AboutMeDescription title={'My Skills'} aboutMeStack={aboutMeStack}/>
            </Container>
        </AboutWrapperSection>
    )
}

const AboutWrapperSection = styled.section`
    padding-top: 175px;
    padding-bottom: 150px;
`

const AboutMe = styled.div`
    margin: 115px 0;
    display: flex;
    justify-content: center;
    gap: 220px;
    padding: 35px 50px 35px 25px;
    align-items: center;

    p {
        color: #535353;
        font: 40px/1.54 serif;

        span {
            color: #FBA820;
            font-weight: bold;
        }
    }

    img {
        max-width: 519px;
        width: 100%;
        object-fit: cover;
    }
`

const MyStory = styled.article`
    text-align: center;
    max-width: 775px;
    width: 100%;
    margin: 150px auto;

    h2 {
        font: bold 60px serif;
        color: #252525;
        margin-bottom: 37px;
    }

    p {
        font: 18px/1.85 serif;
        text-align: center;
        color: #868686;
    }
`

const MediaContent = styled.article`
    margin: 150px auto;
    text-align: center;

    h2 {
        font: bold 36px serif;
        color: #252525;
        margin-bottom: 45px;
    }

    video {
        border-radius: 40px;
        max-width: 980px;
        width: 100%;
        height: 561px;
        outline: 2px solid red;
    }
`
