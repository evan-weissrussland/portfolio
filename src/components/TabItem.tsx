import React, {FC} from 'react';
import styled from "styled-components";

type Props = {
    item:string
    setActiveTab:(v:string) => void
    activeTab:string
}
export const TabItem:FC<Props> = ({item, setActiveTab, activeTab}) => {

    return (
        <>
            <LiItem isActive={activeTab === item} onClick={() => {
                setActiveTab(item)
            }}>
                {item}
            </LiItem> <Dot/>
        </>
    );
};

const LiItem = styled.li<{ isActive: boolean }>`
    cursor: pointer;
    color: ${props => props.isActive ? '#252525' : '#929292'};
`
const Dot = styled.div`
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #929292;
    &:last-of-type {
        display: none;
    }
`