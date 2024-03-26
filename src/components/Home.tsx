import styled from "styled-components";
import iconsHome from "../images/iconsHome.svg";
import backHomeImage from "../images/backHome1.webp";
import {Button} from "./assets/Button";
import {Container} from "./assets/Container";

export const Home = () => {
    return (
        <HomeSection id={'home'}>
            <Container>
                <HomeWrapper>
                    <p>Hello, I'm <span>Lucas Alves</span></p>
                    <h1>Graphic Designer & Ceo of Graphic Type.
                        I love to provide quality works.
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
    max-width: 370px;
    width: 100%;
    padding: 318px 0 80px;
    color: white;
    margin: 0 10px;

    h1 {
        font-size: 18px;
        margin-bottom: 54px;
    }

    ${Button}:hover {
        background: rgba(251, 168, 32, 0.15);
    }

    p {
        font-size: 70px;
        margin-bottom: 15px;

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
`