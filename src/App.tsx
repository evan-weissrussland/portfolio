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
import { LazyLoadImage } from "react-lazy-load-image-component";
export const App = () => {
    return (
        <Wrapper>
            <Header/>
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
                    <LazyLoadImage
                        src={avaAboutMe}
                        alt={`Image`}
                    />
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
                    <iframe
                        src={`https://www.youtube.com/embed/UQFD67B9xO0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
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
    justify-content: space-between;
    padding: 35px 50px 35px 25px;
    align-items: center;

    @media (max-width: 879px) {
        flex-direction: column;
    }

    @media (max-width: 1350px) {
        gap: 20px ;
    }

    p {
        color: #535353;
        font: 40px/1.54 serif;
        max-width: 536px;
        width: 100%;
        min-width: 400px;

        span {
            color: #FBA820;
            font-weight: bold;
        }

        @media (max-width: 490px) {
            font-size: 30px;
            min-width: 285px;

        }

        @media (max-width: 879px) {
            max-width: 100%;
        }

        @media (min-width: 880px) and (max-width: 1000px) {
            font-size: calc((100vw - 880px) / (1000 - 880) * (40 - 30) + 30px);
        }
    }

    img {
        width: 519px;
        object-fit: cover;

        @media (max-width: 650px) {
            width: 100%;
            aspect-ratio: 5 / 7;
        }

        @media (min-width: 651px) and (max-width: 879px) {
            width: 100%;
            aspect-ratio: 5 / 3;
        }

        @media (min-width: 880px) and (max-width: 1000px) {
            width: calc((100vw - 880px) / (1000 - 880) * (519 - 330) + 330px);
        }
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
    padding: 0 10px;

    h2 {
        font: bold 36px serif;
        color: #252525;
        margin-bottom: 45px;
    }

    iframe {
        border-radius: 40px;
        max-width: 980px;
        width: 100%;
        height: 561px;
        //outline: 2px solid red;
    }
`
