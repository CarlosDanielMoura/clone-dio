import { ButtonContainer } from "./styles";
import { IButton } from "./types";

const Button = ({ title, variant = "primary", onClick, type }: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick} type={type}>
            {title}
        </ButtonContainer>
    );
};

export default Button;
