import React from "react";

import { InputContainer, InputText, IconContainer } from "./styles";
import { IInput } from "./type";
import { Controller } from "react-hook-form";

const Input = ({ erroMessage, leftIcon, name, control, ...rest }: IInput) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => <InputText {...field} {...rest} />}
                />
            </InputContainer>
            {erroMessage ? <p>{erroMessage}</p> : null}
        </>
    );
};

export default Input;
