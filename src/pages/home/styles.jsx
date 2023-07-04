import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 80%;
    min-width: 80%;
    display: flex;
    justify-content: space-around;
    gap: 224px;
    margin: 126px 0;
`;

export const ContainerLeft = styled.div`
    width: 368px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: ease-in-out 0.5s;
    }
`;

export const ContainerRight = styled.div`
    width: 563px;
    height: 366px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: justify;

    span {
        width: 100%;
        display: block;
    }

    span:nth-child(1) {
        color: #e4105d;
    }
`;

export const Paragraph = styled.p`
    color: #fff;
    font-size: 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 16px;
    margin-bottom: 60px;
`;
