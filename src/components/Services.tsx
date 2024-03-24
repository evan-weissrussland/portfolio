import React, {useState} from 'react';
import {Container} from "./assets/Container";
import styled from "styled-components";
import sprite from "../images/sprite.svg";

const myOffer = [
    [
        {
            id: 1,
            title: 'Branding Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
            icon: {
                id:'apple',
                width:'60',
                height:'77',
                viewBox:"0 0 60 77"
            }
        },
        {
            id: 2,
            title: 'T-Shirt Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
            icon: {
                id:'apple',
                width:'60',
                height:'77',
                viewBox:"0 0 60 77"
            }
        },
        {
            id: 3,
            title: 'Package Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
            icon: {
                id:'apple',
                width:'60',
                height:'77',
                viewBox:"0 0 60 77"
            }
        }
    ],
    [
        {
            id: 4,
            title: 'Hose Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
            icon: {
                id:'apple',
                width:'60',
                height:'77',
                viewBox:"0 0 60 77"
            }
        },
        {
            id: 5,
            title: 'Bathroom Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.',
            icon: {
                id:'apple',
                width:'60',
                height:'77',
                viewBox:"0 0 60 77"
            }
        }
    ],
    []
]


export const Services = () => {
    const [paginationPage, setPaginationPage] = useState(0)

    return (
        <ServicesSection id={'services'}>
            <Container>
                <ServicesWrapper>
                    <h2>What I Offer</h2>
                    <p>Things that I can do for my clients. Just make your good trust I love to provide quality
                        works.
                    </p>
                    <aside>
                        <MyOffer>
                            {myOffer[paginationPage].map(m => <ServicesItem key={m.id}>
                                <svg width={m.icon.width} height={m.icon.height} viewBox={m.icon.viewBox} fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref={`${sprite}#${m.icon.id}`}/>
                                </svg>
                                    <h2>{m.title}</h2>
                                    <p>{m.description}</p>
                            </ServicesItem>)}

                        </MyOffer>
                        <Pagination>
                        <ButtonPagination onClick={()=>{setPaginationPage(0)}} active={paginationPage === 0}/>
                            <ButtonPagination onClick={()=>{setPaginationPage(1)}} active={paginationPage === 1}/>
                            <ButtonPagination onClick={()=>{setPaginationPage(2)}} active={paginationPage === 2}/>
                        </Pagination>
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
        display: flex;
        flex-direction: column;
        gap: 60px;
        align-items: center;
        height: 100%;
        flex-grow: 1;
    }
`

const MyOffer = styled.ul`
    display: flex;
    gap: 28px;
    flex-grow: 1;
`

const ServicesItem = styled.li`
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

        div {
            background: yellow;
        }

        svg {
            fill: #c5c5c5;
        }
    }

    div {
        width: 83px;
        height: 83px;
        background: rgba(255, 0, 0, 0.25);
        margin-bottom: 35px;
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

const Pagination = styled.div`
    display: flex;
    gap: 8px;
`

const ButtonPagination = styled.button<{ active: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.active ? '#fba820' : '#e5e5e5'};
    border: none;
`