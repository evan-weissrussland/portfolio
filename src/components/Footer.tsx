import React from 'react';
import {Container} from "./assets/Container";
import styled from "styled-components";

import iconsHome from "../images/iconsHome.svg";

export const Footer = () => {
    return (
        <FooterSection id={'contacts'}>
            <Container $width={'1100px'}>
                <FooterWrapper>
                    <p>© 2021 <b>Templates Jungle</b>. All rights reserved</p>
                    <aside></aside>
                </FooterWrapper>
            </Container>
        </FooterSection>
    );
};
const FooterSection = styled.section`
    background: #252525;
    //padding: 130px 0 100px;
    
`

const FooterWrapper = styled.div`
    border-top: 1px solid #3e3e3e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    height: 120px;
p {
    color: #ababab;
    font: 14px serif;
     b{
         color: white;
     }
}
    aside {
        width: 208px;
        height: 17px;
        background: url(${iconsHome}) no-repeat;
    }
`