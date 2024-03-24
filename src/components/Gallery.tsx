import React, {FC, useState} from 'react';
import {Container} from "./assets/Container";
import styled from "styled-components";
import sprite from "../images/sprite.svg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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

type SLideProps = {
    slide: {
        id: number,
        title: string,
        description: string,
        icon: {
            id: string,
            width: string,
            height: string,
            viewBox: string
        }
    }
}

const Slide: FC<SLideProps> = (props) => {
    const {slide: {title, description, icon}} = props
    return (
        <ServicesItem>
            <svg width={icon.width} height={icon.height} viewBox={icon.viewBox} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${icon.id}`}/>
            </svg>
            <h2>{title}</h2>
            <p>{description}</p>
        </ServicesItem>
    )
}

const items = myOffer1.map(m => <Slide key={m.id} slide={m}/>)

const responsive = {
    0: {items: 3},
};

export const Gallery = () => {

    return (
        <ServicesSection id={'services'}>
            <Container>

                <ServicesWrapper>
                    <h2>What I Offer</h2>
                    <p>Things that I can do for my clients. Just make your good trust I love to provide quality
                        works.
                    </p>
                    <aside>
                        <AliceCarousel responsive={responsive} mouseTracking={false} disableButtonsControls
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


    h2 {
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
        max-width: 1275px;
        width: 100%;
    }
`

const ServicesItem = styled.div`
    max-width: 404px;
    width: 100%;
    padding: 75px 47px;
    border: 1px solid #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        fill: #767676;
    }

    &:hover {
        box-shadow: 0 2px 40px rgba(187, 187, 187, 0.25);

        svg {
            fill: #c5c5c5;
        }
    }

    h2 {
        color: #535353;
        font-size: 25px;
        margin-bottom: 11px;
    }

    p {
        color: #535353;
        font: 16px/1.85 serif;
        text-align: center;
    }
`