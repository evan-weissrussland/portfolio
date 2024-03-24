import React from 'react';
import sprite from "../../images/sprite.svg";
import styled from "styled-components";
import blogAva from '../../images/BlogAva.png'

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

    article {
        max-width: 533px;
        flex-grow: 0;
    }
`

const Ava = styled.div`
    background: url(${blogAva}) no-repeat center;
    max-width: 589px;
    height: 359px;
    border-radius: 180px;
    outline: 20px solid rgba(251, 168, 32, 0.1);
    flex-grow: 1;
`
const Article = styled.article`
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding-bottom: 10px;

    & > p {
        color: #595959;
        font: 18px/1.93 serif;
    }

    & > div {
        display: flex;
        gap: 117px;
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