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
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    align-items: flex-start;
`;

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 33px;
    justify-content: space-between;
`;

export const ContainerRanking = styled.div`
    width: 100%;
    max-width: 269px;
    height: 352px;
`;

export const Title = styled.h1`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    margin-top: 24px;
    align-items: center;
`;

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const Author = styled.h2`
    color: #fff;
    font-family: " Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Barra = styled.div`
    width: 100%;
    max-width: 137px;
    height: 9px;
    border-radius: 6px;
    background: #fff;
    margin-top: 3px;
`;
export const TitleRanking = styled.h1`
    color: rgba(255, 255, 255, 0.7);
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const ValorBarra = styled.div`
    width: ${(props) => (props.valor <= 137 ? props.valor : 0)}px;
    max-width: 137px;
    height: 9px;
    border-radius: 6px;
    background: #23dd7a;
`;
