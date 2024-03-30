import React, {FC} from "react";
import sprite from "../../images/sprite.svg";
import styled from "styled-components";

type SLideProps = {
    slide: {
        id: number,
        title: string,
        description: string,
        icon: {
            id: string,
            width: string,
            height: string,
            viewBox: string
        }
    }
}
export const Slide: FC<SLideProps> = (props) => {
    const {slide: {title, description, icon}} = props
    return (
        <ServicesItem>
            <svg width={icon.width} height={icon.height} viewBox={icon.viewBox} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${icon.id}`}/>
            </svg>
            <h2>{title}</h2>
            <p>{description}</p>
        </ServicesItem>
    )
}

const ServicesItem = styled.div`
    max-width: 404px;
    width: 100%;
    padding: 75px 47px;
    border: 1px solid #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1260px) {
        margin: 0 auto;
    }

    svg {
        fill: #767676;
        margin-bottom: 35px;
    }

    &:hover {
        box-shadow: 0 2px 40px rgba(187, 187, 187, 0.25);

        svg {
            fill: #c5c5c5;
        }
    }

    h2 {
        color: #535353;
        font-size: 25px;
        margin-bottom: 11px;
    }

    p {
        color: #535353;
        font: 16px/1.85 serif;
        text-align: center;
    }
`





