import styled from "styled-components";
import iconsHome from "../images/iconsHome.svg";
import backHomeImage from "../images/backHome1.webp";
import {Button} from "./assets/Button";
import {Container} from "./assets/Container";
import Typewriter from 'typewriter-effect';

export const Home = () => {
    return (
        <HomeSection id={'home'}>
            <Container>
                <HomeWrapper>
                    <article>
                        <Typewriter
                            options={{
                                autoStart: true,
                                delay: 70,
                                loop:true,
                                cursor: '',
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString(`<p>Hello, I'm <p> <span>Lucas Alves</span>`)
                                    .start();
                            }}
                        />
                    </article>
                    <h1>
                        Graphic Designer & Ceo of Graphic Type. I love to provide quality works.
                    </h1>
                    <Button $borderRadius={'30px'}
                            $border={'1px solid #fba820'}
                            $background={'transparent'}
                            onClick={() => {
                            }}>
                        get in touch
                    </Button>
                    <aside>
                    </aside>
                </HomeWrapper>
            </Container>
        </HomeSection>
    )
}

export const HomeWrapper = styled.div`
    max-width: 350px;
    width: 100%;
    padding: 318px 0 80px;
    color: white;
    margin: 0 10px;

    h1 {
        font-size: 18px;
        margin-bottom: 54px;
        //height: 41px;
    }

    ${Button}:hover {
        background: rgba(251, 168, 32, 0.15);
    }

    & > article {
        font-size: 70px;
        margin-bottom: 15px;        
        height: 166px;

        p {
            color: white;  
        }
        
        span {
            color: #fba820;
        }
    }

    aside {
        margin-top: 203px;
        width: 208px;
        height: 17px;
        background: url(${iconsHome}) no-repeat;
    }
`

const HomeSection = styled.section`
    background: black 0 url(${backHomeImage}) no-repeat;
    background-position: center;
    
    @media (max-width: 999px) {
        background-position: 58% center;
    }
`