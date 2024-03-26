import React, {useState} from 'react';
import {Container} from "./assets/Container";
import styled from "styled-components";
import {TabItem} from "./TabItem";
import {Button} from "./assets/Button";
import image1 from '../images/forPortfolio/1.webp'
import image2 from '../images/forPortfolio/2.webp'
import image3 from '../images/forPortfolio/3.webp'
import image4 from '../images/forPortfolio/4.webp'
import image5 from '../images/forPortfolio/5.webp'
import image6 from '../images/forPortfolio/6.webp'
import image7 from '../images/forPortfolio/7.webp'
import image8 from '../images/forPortfolio/8.webp'
import image9 from '../images/forPortfolio/9.webp'
import sprite from "../images/sprite.svg";

const tabsItems = ['All', 'Branding', 'T-Shirt', 'Package', 'Poster']

const portfolio = [
    {id: 1, title: 'Ultra Jot Coffee Branding', description: 'Package Design', filter: 'Branding', backImage: image1},
    {id: 2, title: 'Package', description: 'Package Design', filter: 'Package', backImage: image2},
    {id: 3, title: 'T-Shirt', description: 'Package Design', filter: 'T-Shirt', backImage: image3},
    {id: 4, title: 'Branding', description: 'Package Design', filter: 'Branding', backImage: image4},
    {id: 5, title: 'sPackage', description: 'Package Design', filter: 'Package', backImage: image5},
    {id: 6, title: 'fT-Shirt', description: 'Package Design', filter: 'T-Shirt', backImage: image6},
    {id: 7, title: 'Poster', description: 'Package Design', filter: 'Poster', backImage: image7},
    {id: 8, title: 'Poster', description: 'Package Design', filter: 'Poster', backImage: image8},
    {id: 9, title: 'Poster', description: 'Package Design', filter: 'Poster', backImage: image9},
]

export const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All')

    let filteredPortfolio = portfolio

    if (activeTab !== 'All') {
        filteredPortfolio = portfolio.filter(p => p.filter === activeTab)
    }

    return (
        <PortfolioSection id={'portfolio'}>
            <Container>
                <PortfolioWrapper>
                    <h2>Portfolio</h2>
                    <Tabs>
                        {tabsItems.map((t, i) => (
                            <TabItem activeTab={activeTab} setActiveTab={setActiveTab} item={t} key={i}></TabItem>))}
                    </Tabs>
                    <aside>
                        {filteredPortfolio.map(p => <PortfolioItem backImage={p.backImage} key={p.id}>
                            <div>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <svg width={"23"} height={'15'}
                                     viewBox={'0 0 23 15'}
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref={`${sprite}#arrow`}/>
                                </svg>
                            </div>
                        </PortfolioItem>)}

                    </aside>
                    <Button $border={'1px solid rgba(0, 0, 0, 0.22)'}
                            $background={'#3f3f3f'}
                            $color={'#f5f5f5'}>
                        view portfolio
                    </Button>
                </PortfolioWrapper>
            </Container>
        </PortfolioSection>
    );
};

const PortfolioSection = styled.section`
    background: white;
    padding: 130px 0 150px;
`

const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: #252525;
        font: 60px serif;
        margin-bottom: 50px;
    }

    aside {
        width: 100%;
        margin-bottom: 60px;
        //outline: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    ${Button}:hover {
        background: white;
        color: #3f3f3f;
        border: 1px solid rgba(0, 0, 0, 0.22);
    }
`
const Tabs = styled.ul`
    display: flex;
    max-width: 483px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`
const PortfolioItem = styled.div<{backImage:string}>`
    position: relative;
    //outline: 1px solid mediumvioletred;
    max-width: 411px;
    width: 100%;
    height: 358px;
    background-image: url(${props => props.backImage});
    background-size: contain;
    background-repeat: no-repeat;

    & > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(21, 21, 21, 0.71);
        opacity: 0;
        transition: 0.5s;
        color: #f9f9f9;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 30px 32px;

        h3 {
            font-size: 26px;
            margin-bottom: 2px;
        }

        p {
            font-size: 16px;
        }

        svg {
            fill: #f9f9f9;
            position: absolute;
            right: 38px;
            bottom: 46px;
            cursor: pointer;
        }
    }

    &:hover > div {
        opacity: 1;
        backdrop-filter: blur(2px);
    }
`

