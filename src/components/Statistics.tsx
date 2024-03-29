import React from 'react';
import {Container} from "./assets/Container";
import styled from "styled-components";

const statistics = [
    {id: 1, count: 720, description: 'Projects Completed'},
    {id: 2, count: 920, description: 'Products Sold'},
    {id: 3, count: 25, description: 'Awards Received'},
    {id: 4, count: 700, description: 'Happy Clients'}
]

export const Statistics = () => {
    return (
        <StatisticsSection>
            <Container $width={'1220px'}>
                <StatsData>
                    {statistics.map(s => <StatItem key={s.id}>
                        <div>
                            <p>
                                {`${s.count}+`}
                            </p>
                            <span>
                            {s.description}
                        </span>
                        </div>
                    </StatItem>)}
                </StatsData>
            </Container>
        </StatisticsSection>
    );
};
const StatisticsSection = styled.section`
    background: #f9f9f9;
`

const StatsData = styled.ul`
    padding: 120px 0 150px;
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    flex-wrap: wrap;

    @media (max-width: 499px) {
        flex-direction: column;
    }
`

const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    @media (max-width: 888px) {
        align-items: center;

        div {
            min-width: 219px;
        }
    }

    @media (min-width: 500px) and (max-width: 888px) {
        flex-basis: 50%;
    }

    p {
        font: bold 105px serif;
        color: #ececec;
    }

    span {
        font: 18px serif;
        color: #535353;
        padding-left: 10px;
    }
`