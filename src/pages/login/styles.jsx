import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-width: 80%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
`;

export const ContainerRight = styled.div`
    width: 565px;
    height: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Containerleft = styled.div`
    width: 300px;
    height: 400px;

    button {
        margin-top: 47px;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: ease-in-out 0.4s;
    }

    input {
        margin-bottom: 20px;
    }
`;

export const Title = styled.h2`
    color: #fff;
    font-size: 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
`;

export const Paragraph = styled.p`
    color: #fff;
    font-size: 18px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
    margin-bottom: 35px;
`;

export const Text = styled.h2`
    color: #fff;
    font-size: 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const EsqueciText = styled.p`
    color: #e5e044;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 44px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: ease-in-out 0.3s;
    }
`;
export const CriarAccountText = styled.p`
    color: #23dd7a;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 44px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: ease-in-out 0.3s;
    }
`;
