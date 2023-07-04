import {
    Container,
    Wrapper,
    BuscarInputContainer,
    Input,
    Row,
    MenuRight,
    UserPicture,
} from "./styles";

import Logo from "../../assets/Logo-dio.svg";
import Button from "../Button";

const Header = ({ pag }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <UserPicture src={Logo} />
                    {pag !== "Home" ? (
                        <BuscarInputContainer>
                            <Input type="Text" placeholder="Buscar" />
                        </BuscarInputContainer>
                    ) : null}
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Login" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Header;
