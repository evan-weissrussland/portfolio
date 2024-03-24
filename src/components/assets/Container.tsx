import styled from "styled-components";

export const Container = styled.div<{$width?:string}>`
    max-width: ${props => props.$width || '1275px' };
    width: 100%;
    //border: 1px solid blue;
    margin: 0 auto;
`;