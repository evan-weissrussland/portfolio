import styled from "styled-components";
import {useState} from "react";

export const navMenuItems = [
    {title: 'Home', id: 1, link: 'home'},
    {title: 'About', id: 2, link: 'about'},
    {title: 'Services', id: 3, link: 'services'},
    {title: 'Portfolio', id: 4, link: 'portfolio'},
    {title: 'Store', id: 5, link: 'store'},
    {title: 'Blog', id: 6, link: 'blog'},
    {title: 'Contact', id: 7, link: 'contacts'}
]

export const Header = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('home')
    return (
        <HeaderWrapper>
            <ContainerHeader>
                <AuthorName href={'#home'} onClick={() => {
                    setActiveMenuItem('home')
                }}><span>Lucas</span> Alves</AuthorName>
                <Nav>
                    <ul>
                        {navMenuItems.map(n => <MenuItem $active={activeMenuItem === n.link} onClick={() => {
                            setActiveMenuItem(n.link)
                        }} key={n.id}>
                            <a href={`#${n.link}`}>{n.title}</a>
                        </MenuItem>)}
                    </ul>
                </Nav>
            </ContainerHeader>
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    //padding-top: 60px;
    //border: 2px solid rgba(34, 255, 0, 0.94);
    z-index: 999999;

`;
export const ContainerHeader = styled.div`
    max-width: 1920px;
    width: 100%;
    //border: 5px solid blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 100px 0;
    margin: 0 auto;
    background: black;
`;
export const AuthorName = styled.a`
    color: white;
    font-size: 44px;
    cursor: default;
    display: inline-block;
    text-decoration: none;

    span {
        color: #FBA820;
    }
`;
export const Nav = styled.nav`
    max-width: 495px;
    width: 100%;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
type MenuItemPropsType = {
    $active: boolean
}
export const MenuItem = styled.li<MenuItemPropsType>`
    position: relative;

    a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        line-height: 20px;
    }

    &::before {
        content: '';
        position: absolute;
        display: ${props => props.$active ? 'inline-block' : 'none'};
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: #FBA820;
        bottom: -3px;
    }
`;