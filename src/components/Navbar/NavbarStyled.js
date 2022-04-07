import styled from 'styled-components';

export const NavbarDiv = styled.nav`
    display:flex;
    justify-content: space-between;
    background-color: #5968b9;
    height: 10vh;
`;

export const DivForButton = styled.div`
    display:flex;
    align-items:center;
    margin: 5px 5px;
    @media (max-width: 564px) {
        display: none;
    }
`;

export const ButtonForCell = styled.div`
    display:flex;
    align-items:center;
    margin: 0 5px;
    @media (min-width: 564px) {
        display: none;
    }
`;
export const DivForImgAndName = styled.div`
    display:flex;
    align-items:center;
    margin: 0 5px;
`;

export const ImgMe = styled.img`
    border-radius: 50%;
    height: 50%;
`;

export const ButtonForInformation = styled.a`
    margin: 0 5px;
    font-family: 'Helvetica Neue';
    height:50%;
`;

export const H1Title = styled.h1`
    font-family: 'Helvetica Neue';
`;