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
    const [isShowMenu, setIsShowMenu] = useState(false)
    return (
        <HeaderWrapper $burgerMenu={isShowMenu}>
            <ContainerHeader>
                <AuthorName href={'#home'} onClick={() => {
                    setActiveMenuItem('home')
                }}><span>Lucas</span> Alves</AuthorName>
                <Nav onClick={() => {
                    isShowMenu && setIsShowMenu(false)
                }} $burgerMenu={isShowMenu}>
                    <div onClick={() => {
                        setIsShowMenu(!isShowMenu)
                        console.log(111)
                    }}>
                        <span></span>
                    </div>
                    <ul>
                        {navMenuItems.map(n => <MenuItem $burgerMenu={isShowMenu} $active={activeMenuItem === n.link}
                                                         onClick={() => {
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
    bottom: ${props => props.$burgerMenu && '0'};
    z-index: 999999;
    background: black;

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
    //background: black;
    
    @media (max-width: 1450px) {
        padding: 60px 10px 0;
        max-width: 1275px;
    }
`;
export const AuthorName = styled.a`
    color: white;
    font-size: 44px;
    cursor: default;
    display: inline-flex;
    text-decoration: none;
    flex-shrink: 1;
    margin-right: 20px;
    
    span {
        color: #FBA820;
    }
`;
export const Nav = styled.nav<{ $d?: boolean }>`
    max-width: 495px;
    width: 100%;
    flex-shrink: 3;
    text-align: right;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 600px) {
            display: none;
        }      
    }

    & > div {
        display: none;
        cursor: pointer;
        position: relative;
        width: 45px;
        height: 30px;
        z-index: 9999999;

        @media (max-width: 600px) {
            display: inline-flex;
            align-items: center;
        }

        span {
            position: relative;
            height: 5px;
            width: 40px;
            border-radius: 5px;
            background: #fba820;
            


            &::before {
                content: '';
                position: absolute;
                display: inline-block;
                height: 5px;
                width: 40px;
                bottom: 10px;
                border-radius: 5px;
                left: 0;
                background: rgba(255, 0, 195, 0.89);
            }

            &::after {
                content: '';
                position: absolute;
                display: inline-block;
                height: 5px;
                width: 40px;
                top: 10px;
                border-radius: 5px;
                left: 0;
                background: rgba(34, 255, 0, 0.94);
            }
        }
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