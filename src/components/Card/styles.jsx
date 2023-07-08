import { styled } from "styled-components";

export const ContainerCard = styled.div`
    width: 100%;
    max-width: 720px;
    height: 340px;
    border-radius: 0px 0px 5px 5px;
    background: #3b4651;
`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 50%;
`;

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContainerConteudo = styled.div`
    max-width: 100%;
    height: 160px;
    padding: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Author = styled.h2`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Time = styled.span`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Title = styled.h1`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 16px;
`;

export const SubTitle = styled.p`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Hashtag = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 10px;
`;

export const Contador = styled.p`
    color: #fff;
    font-family: " Open Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 6px;
    margin-left: 36px;
`;
