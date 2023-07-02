import { styled, css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #ffffff;
    padding: 2px 12px;
    min-width: 128px;
    width: 100%;
    border: none;

    ${({ variant }) =>
        variant !== "primary" &&
        css`
            min-width: 167px;
            height: 33px;
            background: #e4105d;
            border: none;

            &::after {
                content: "";
                position: absolute;
                border-radius: 22px;
                border: 2px solid #e4105d;
                top: -6px;
                left: -6px;
                width: calc(100% + 10px);
                height: calc(100% + 10px);
            }
        `}
`;
