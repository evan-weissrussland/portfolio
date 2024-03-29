import styled from "styled-components";

import React from 'react';
import {Container} from "./assets/Container";
import {AboutMeDescription} from "./AboutWrapper";

export const aboutMeStack = [
    {id: 1, stack: 'Adobe Photoshop', percent: 96},
    {id: 2, stack: 'Adobe Illustrator', percent: 92},
    {id: 3, stack: 'Adobe After Effect', percent: 85},
    {id: 4, stack: 'Adobe InDesign', percent: 94}
]

export const About = () => {
    return (
        <AboutSection id={'about'}>
            <Container>
                <AboutMeDescription title={'About Me'} aboutMeStack={aboutMeStack}/>
            </Container>
        </AboutSection>
    );
};


export const AboutSection = styled.section`
    background: white;
    padding: 150px 10px;
`

