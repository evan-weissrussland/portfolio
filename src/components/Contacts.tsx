import React from 'react';
import {Container} from "./assets/Container";
import styled from "styled-components";
import {Button} from "./assets/Button";


export const Contacts = () => {
    return (
        <ContactsSection id={'contacts'}>
            <Container>
                <ContactsWrapper>
                    <h2>Let’s work together</h2>
                    <p>I’m available for freelance work. Have any projects in your mind? Just feel free to contact
                        me
                    </p>
                    <Button $background={'transparent'} $border={'1px solid #fba820'} $borderRadius={'30px'}>contact me</Button>
                </ContactsWrapper>
            </Container>
        </ContactsSection>
    );
};
const ContactsSection = styled.section`
    background: #252525;
    padding: 130px 0 100px;
`
const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        color: #eaeaea;
        font:bold 72px serif;
        margin-bottom: 21px;
        letter-spacing: 0.15em;
    }
    
    p {
        color: #d9d9d9;
        font: 18px/1.85 serif;
        max-width: 470px;
        width: 100%;
        text-align: center;
        margin-bottom: 60px;
        letter-spacing: 0.01em;
    }
`