import styled from "styled-components";

export const TopCarousel = styled.div`
    height: 410px;
    background-color: #49111c;
    display: flex;

    div {
        width: 33.3333%;
        height: 380px;
        top: 30px;
        position: relative;
        background-size: cover;
    }
    div:before {
    background-image: linear-gradient(90deg,#fff,#7c93ff 40%,#94ffda 90%);
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    }

    div:after {
    background-image: linear-gradient(0deg,#222430 20%,transparent);
    bottom: 0;
    content: "";
    display: block;
    height: 240px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
    }

`