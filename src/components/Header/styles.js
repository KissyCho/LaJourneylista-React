import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 76px;
    background-color: #fff;
    display: flex;
    justify-content: space-between; 
    padding: 0 35px;
    align-items: center;
    overflow: hidden;

    .header__logo {
        height: 100%;
        width: 206px;
        transform: scale(1.7);
    
    }

    .header__button {
        display: flex;
        align-items: center;
        font-weight: 700;
        height: 40px;
        box-shadow: inset 0 0 0 1px #332885;
        padding: 0 10px;
    }
`

