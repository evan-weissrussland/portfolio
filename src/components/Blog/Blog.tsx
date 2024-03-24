import React from "react";
import styled from "styled-components";

import {Container} from "../assets/Container";
import {Followers} from "./Followers";
import {MyBlog} from "./BlogPostsWrapper";

export const Blog = () => {
    return (
        <BlogSection id={'blog'}>
            <Container>
                <BlogWrapper>
                    <Followers/>
                    <MyBlog/>
                </BlogWrapper>
            </Container>
        </BlogSection>
    )
}

const BlogSection = styled.section`
    padding: 150px 0 160px;
`
const BlogWrapper = styled.div`

`




