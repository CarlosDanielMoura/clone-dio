import { ButtonContainer } from "./styles";

const Button = ({ title, variant = "primary", onClick, type }) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick} type={type}>
            {title}
        </ButtonContainer>
    );
};

export default Button;
