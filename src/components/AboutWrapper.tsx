import styled from "styled-components";
import {Button} from "./assets/Button";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    aboutMeStack: Skill[]
    title:string
}
type Skill = {
    id:number
    stack:string
    percent:number
}

export const AboutMeDescription:FC<Props> = (props) => {
    const navigation = useNavigate()
    const {aboutMeStack, title} = props
    return (
        <AboutWrapper>
            <AboutMe>
                <h2 onClick={()=>{navigation('about')}}>
                    {title}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl
                    posuere aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus
                    suspendisse risus vulputate pulvinar cursus suspendisse risus vulputate enim pharetra
                    eu.
                </p>
                <p>
                    Sit faucibus suspendisse risus vulputate pulvinar cursus enim hareta eu. Sagittis enim
                    morb. Suspendisse risus.
                </p>
                <ButtonsGroup>
                    <Button $borderRadius={'none'}
                            $border={'1px solid rgba(0, 0, 0, 0.22)'}
                            $padding={'17px 40px 19px'}
                            $fontSize={'16px'}
                            $color={'#3f3f3f'}>
                        hire me
                    </Button>
                    <Button $borderRadius={'none'}
                            $border={'1px solid rgba(0, 0, 0, 0.22)'}
                            $padding={'17px 40px 19px'}
                            $fontSize={'16px'}
                            $color={'#3f3f3f'}>
                        download cv
                    </Button>
                </ButtonsGroup>
            </AboutMe>
            <MySkills>
                <ul>
                    {
                        aboutMeStack.map(a => <LiItem $percent={a.percent}
                                                      key={a.id}><span>{a.stack}</span><span>{`${a.percent}%`}</span>
                        </LiItem>)
                    }
                </ul>
            </MySkills>
        </AboutWrapper>
    )
}



const LiItem = styled.li<{ $percent: number }>`
    color: #252525;
    font-size: 16px;
    position: relative;

    span:last-child {
        position: absolute;
        right: ${props => (`${100 - props.$percent}%`)};
        transform: translateX(50%);
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 37px;
        border-radius: 5px;
        background: #fba820;
        height: 5px;
        width: ${props => `${props.$percent}%`};

        @media (max-width: 530px) {
            top: 27px;
        }
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 37px;
        border-radius: 5px;
        background: #eaeaea;
        height: 5px;
        width: 100%;

        @media (max-width: 530px) {
            top: 27px;
        }
    }
`

const AboutWrapper = styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    padding: 0 10px;

    @media (max-width: 530px) {
        flex-direction: column;
    }
    
    @media (max-width: 725px) {
        gap: 0;
        justify-content: space-between;
        margin: 0 10px;
    }
`
const AboutMe = styled.div`
    flex-shrink: 1;
    max-width: 526px;
    margin-right: 20px;

    h2 {
        font-size: 60px;
        color: #252525;
        margin-bottom: 37px;
    }

    p {
        line-height: 1.85;
        font-size: 16px;
        color: #868686;
        max-width: 531px;
        width: 100%;

        & + p {
            margin: 24px 0 60px;
            
            @media (max-width: 630px) {
                margin-bottom: 5px;
            }
        }
    }
`
const MySkills = styled.div`
    max-width: 627px;
    width: 100%;
    padding-top: 74px;
    display: flex;
    align-items: flex-end;
    flex-shrink: 3;

    @media (max-width: 530px) {
        padding-top: 20px;
    }
    
    @media (min-width:531px) and (max-width: 660px) {
        flex-shrink: 0;
        width: 200px;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 78px;
        padding-bottom: 22px;

        @media (max-width: 530px) {
            gap: 25px;
        }
        
        @media (max-width: 630px) {
            height: 100%;
        }
    }
`
const ButtonsGroup = styled.div`
    display: flex;
    gap: 22px;    
    
    @media (max-width: 630px) {
        flex-direction: column;
    }
    
    ${Button} {
        &:hover {
            color: #f5f5f5;
            background: black;
        }
    }
`