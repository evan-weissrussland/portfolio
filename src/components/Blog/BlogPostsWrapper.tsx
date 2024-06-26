import React from 'react';
import sprite from "../../images/sprite.svg";
import styled from "styled-components";
import {Button} from "../assets/Button";

const posts = [
    {
        id: 1, date: '09', month: 'Feb', post: 'Why should we invest more in branding first?'
    },
    {
        id: 2, date: '08', month: 'Feb', post: 'Best rules to follow for achieving business goals'
    },
    {
        id: 3, date: '06', month: 'Feb', post: 'Top 100 most beautiful t-shirt print design'
    },
]

export const MyBlog = () => {
    return (
        <BlogPostsWrapper>
            <h2>BlogPosts</h2>
            <BlogPosts>
                {posts.map(p => <Post key={p.id}>
                    <div>{p.date} <span>{p.month}</span></div>
                    <p>{p.post}
                        <button> <span>Read More</span>
                            <svg width={"10"} height={'10'}
                                 viewBox={'0 0 10 10'}
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={`${sprite}#moreArrow`}/>
                            </svg>
                        </button>
                    </p>
                </Post>)}
            </BlogPosts>
            <Button $border={'1px solid rgba(0, 0, 0, 0.22)'}
                    $color={'#f5f5f5'}
                    $background={'#3f3f3f'}>
                read all blogs
            </Button>
        </BlogPostsWrapper>
    );
};
const BlogPostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font: 60px serif;
        color: #252525;
        margin-bottom: 70px;
    }

    ${Button}:hover {
        background: white;
        color: #3f3f3f;
        border: 1px solid rgba(0, 0, 0, 0.22);
    }
`

const BlogPosts = styled.ul`
    max-width: 990px;
    width: 100%;
    margin-bottom: 80px;
`

const Post = styled.li`
    display: flex;
    align-items: center;
    padding: 40px 50px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    justify-content: space-between;
    gap: 25px;

    @media (max-width: 750px) {
        padding: 40px 0;
    }

    div {
        white-space: nowrap;
        width: 91px;
        color: #fba820;
        font: 48px serif;

        @media (max-width: 550px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        span {
            color: #3f3f3f;
            font: 21px serif;
        }
    }

    p {
        max-width: 721px;
        flex-grow: 1;
        display: flex;
        color: #939393;
        font: bold 25px serif;
        cursor: default;
        align-items: center;
        justify-content: space-between;
        gap: 25px;

        &:hover {
            color: #535353;
        }

        button {
            all: unset;
            color: #3f3f3f;
            font: 16px serif;
            display: flex;
            gap: 10px;
            align-items: center;
            cursor: default;

            span {
                white-space: nowrap;
            }

            @media (max-width: 750px) {
                gap: 0;

                & span {
                    width: 50px;
                    white-space: normal;
                }
            }

            svg {
                fill: #3f3f3f;
            }
        }
    }
`