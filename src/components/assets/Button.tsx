import styled from "styled-components";

type ButtonPropsType = {
    $borderRadius?: string
    $border?: string
    $background?: string
    $padding?: string
    $fontSize?: string
    $color?: string
}
export const Button = styled.button<ButtonPropsType>`
    font-size: ${props => props.$fontSize || '18px'};
    padding: ${props => props.$padding || '20px 47px'};
    border-radius: ${props => props.$borderRadius || 0};
    border: ${props => props.$border || 'none'};
    background: ${props => props.$background || 'white'};
    color: ${props => props.$color || 'white'};
    text-transform: uppercase;
`