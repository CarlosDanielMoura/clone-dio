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

export const ContainerLeft = styled.div`
    width: 100%;
    max-width: 388px;
`;

export const ContainerRight = styled.div`
    width: 100%;
    max-width: 368px;

    button {
        margin-top: 35px;
        margin-bottom: 27px;
    }
`;

export const Paragraph = styled.p`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Title = styled.h1`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
`;

export const SubTitle = styled.p`
    color: #fff;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 35px;
`;

export const ParagraphRight = styled.p`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ParagraphRightSub = styled.p`
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 11px;
`;

export const FazerLogin = styled.span`
    color: #23dd7a;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 11px;
`;
