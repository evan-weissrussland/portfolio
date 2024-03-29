import React from 'react';
import sprite from "../../images/sprite.svg";
import styled from "styled-components";
import blogAva from '../../images/BlogAva1.webp'

export const Followers = () => {
    return (
        <FollowersSection>
            <Ava/>
            <Article>
                <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl
                    posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor. Sit faucibus
                    placerat at nisl posuere aliquet amet pharetra suspendisse risus.”
                </p>
                <div>
                    <Follower>
                        <h3>
                            Emma Brown
                        </h3>
                        <p>
                            CEO - Squirrel Sweets
                        </p>
                    </Follower>
                    <ArrowsButton>
                        <svg width={"29"} height={'15'}
                             viewBox={'0 0 29 15'}
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${sprite}#arrow`}/>
                        </svg>
                        <svg width={"29"} height={'15'}
                             viewBox={'0 0 29 15'}
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${sprite}#arrow`}/>
                        </svg>
                    </ArrowsButton>

                </div>
            </Article>
        </FollowersSection>
    );
};
const FollowersSection = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 160px;
    gap: 35px;

    @media (max-width: 889px) {
        flex-direction: column;
        align-items: center;
    }
    
`

const Ava = styled.div`
    background: url(${blogAva}) no-repeat center;
    height: 359px;
    border-radius: 180px;
    outline: 20px solid rgba(251, 168, 32, 0.1);
    flex: 0 1 589px;
    
    @media (max-width: 889px) {
        max-width: 589px;
        width: 100%;
        flex: 0 1 auto;
    }        
`
const Article = styled.article`
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding-bottom: 10px;
    width: 100%;
    flex-shrink: 2;
    max-width: 533px;
    flex-grow: 0;

    @media (max-width: 889px) {
        flex-grow: 1;
        max-width: 700px;
    }

    & > p {
        color: #595959;
        font: 18px/1.93 serif;
    }

    & > div {
        display: flex;
        gap: 117px;

        @media (min-width:375px) and (max-width: 450px) {
           gap: calc((100vw - 375px) / (450 - 375) * (117 - 50) + 50px);
        }
    }


`

const Follower = styled.div`
    h3 {
        color: #252525;
        font: bold 22px serif;
        margin-bottom: 6px;
    }

    p {
        color: #a8a8a8;
        font: 16px serif;
    }
`

const ArrowsButton = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 26px;

    svg {
        fill: rgba(64, 64, 64, 0.25);

        &:first-child {
            transform: rotate(180deg);
        }

        &:hover {
            fill: rgb(64, 64, 64);
        }
    }
`