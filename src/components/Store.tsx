import {Container} from "./assets/Container";
import styled from "styled-components";
import sprite from "../images/sprite.svg";
import React from "react";

const icons = [
    {
        id: 1,
        icon: {
            id: 'orel',
            width: '78',
            height: '78',
            viewBox: "0 0 78 78"
        }
    },
    {
        id: 2,
        icon: {
            id: 'apple',
            width: '60',
            height: '77',
            viewBox: "0 0 60 77"
        }
    },
    {
        id: 3,
        icon: {
            id: 'tree',
            width: '63',
            height: '72',
            viewBox: "0 0 62 72"
        }
    },
    {
        id: 4,
        icon: {
            id: 'belka',
            width: '74',
            height: '65',
            viewBox: "0 0 74 65"
        }
    },
    {
        id: 5,
        icon: {
            id: 'pizza',
            width: '65',
            height: '77',
            viewBox: "0 0 65 77"
        }
    },
    {
        id: 6,
        icon: {
            id: 'finger',
            width: '72',
            height: '73',
            viewBox: "0 0 72 73"
        }
    },
    {
        id: 7,
        icon: {
            id: 'sber',
            width: '69',
            height: '63',
            viewBox: "0 0 69 63"
        }
    },
    {
        id: 8,
        icon: {
            id: 'guitar',
            width: '68',
            height: '80',
            viewBox: "0 0 68 80"
        }
    },
    {
        id: 9,
        icon: {
            id: 'hands',
            width: '84',
            height: '71',
            viewBox: "0 0 84 71"
        }
    },
    {
        id: 10,
        icon: {
            id: 'brain',
            width: '87',
            height: '71',
            viewBox: "0 0 87 71"
        }
    },
    {
        id: 11,
        icon: {
            id: 'zub',
            width: '56',
            height: '71',
            viewBox: "0 0 56 71"
        }
    },
    {
        id: 12,
        icon: {
            id: 'wine',
            width: '63',
            height: '72',
            viewBox: "0 0 63 72"
        }
    }

]

export const Store = () => {
    return (
        <StoreSection id={'store'}>
            <Container $width={'1486px'}>
                <StoreWrapper>
                    <h2>Brands I’ve Worked</h2>
                    <p>Things that I can do for my clients. Just make your good trust I love to provide quality
                        works.
                    </p>
                    <aside>
                        <div>{icons.map(i => <div key={i.id}>
                            <svg width={i.icon.width} height={i.icon.height}
                                 viewBox={i.icon.viewBox}
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={`${sprite}#${i.icon.id}`}/>
                            </svg>
                        </div>)}</div>
                    </aside>
                </StoreWrapper>
            </Container>
        </StoreSection>
    )
}
const StoreSection = styled.section`
    background: #252525;
    padding: 130px 0 150px;
`
const StoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;

    h2 {
        color: #eaeaea;
        font-size: 60px;
        text-align: center;
        margin-bottom: 14px;
    }

    p {
        color: #b4b4b4;
        font: 18px/1.85 serif;
        max-width: 600px;
        text-align: center;
        margin-bottom: 60px;
    }

    aside {
        width: 100%;
        padding: 70px 0;

        & > div {

            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            & > div {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 0 0 16.6%;

                @media (max-width: 700px) {
                    flex: 0 0 33%;

                    &:nth-child(-n + 9) {
                        padding-bottom: 40px;
                    }
                }

                @media (min-width: 701px) and (max-width: 930px) {
                    flex: 0 0 25%;

                    &:nth-child(-n + 8) {
                        padding-bottom: 70px;
                    }
                }

                @media (min-width: 931px) {
                    &:nth-child(-n + 6) {
                        padding-bottom: 136px;
                    }
                }
            }

            svg {
                fill: #767676;                

                &:hover {
                    fill: #c5c5c5;
                }
            }
        }
    }
`