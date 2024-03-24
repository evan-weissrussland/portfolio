import React from 'react';
import {Container} from "../assets/Container";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'
import {Slide} from "./Slide";


const responsive = {
    0: {items: 3},
};

const myOffer1 = [
    {
        id: 1,
        title: 'Branding Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
        icon: {
            id: 'apple',
            width: '60',
            height: '77',
            viewBox: "0 0 60 77"
        }
    },
    {
        id: 2,
        title: 'T-Shirt Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
        icon: {
            id: 'apple',
            width: '60',
            height: '77',
            viewBox: "0 0 60 77"
        }
    },
    {
        id: 3,
        title: 'Package Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
        icon: {
            id: 'apple',
            width: '60',
            height: '77',
            viewBox: "0 0 60 77"
        }
    },
    {
        id: 4,
        title: 'Hose Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
        icon: {
            id: 'apple',
            width: '60',
            height: '77',
            viewBox: "0 0 60 77"
        }
    },
    {
        id: 5,
        title: 'Bathroom Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
        icon: {
            id: 'apple',
            width: '60',
            height: '77',
            viewBox: "0 0 60 77"
        }
    }
]

export const items = myOffer1.map(m => <Slide key={m.id} slide={m}/>)

export const Services = () => {

    return (
        <ServicesSection id={'services'}>
            <Container $width={'1295px'}>

                <ServicesWrapper>
                    <h2>What I Offer</h2>
                    <p>Things that I can do for my clients. Just make your good trust I love to provide quality
                        works.
                    </p>
                    <aside>
                        <AliceCarousel responsive={responsive}
                                       disableButtonsControls
                                       items={items}/>
                    </aside>
                </ServicesWrapper>
            </Container>
        </ServicesSection>
    );
};

const ServicesSection = styled.section`
    background: #f9f9f9;
    padding: 130px 0 150px;
`
const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    min-height: 650px;


    & > h2 {
        font: 600 60px serif;
        color: #252525;
        margin-bottom: 14px;
    }

    & > p {
        color: #868686;
        font: 18px/1.85 serif;
        margin-bottom: 60px;
        max-width: 511px;
        width: 100%;
        text-align: center;
        padding: 0 20px;
    }

    aside {
        width: 100%;
    }
`

