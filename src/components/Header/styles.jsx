import { styled } from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background: #151515;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
`;

export const Menu = styled.a`
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

export const MenuRight = styled.a`
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

export const UserPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 22px;
`;

export const Input = styled.input`
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
    color: #fff;
    border-radius: 8px;
    &:focus {
        outline: none;
    }
`;
