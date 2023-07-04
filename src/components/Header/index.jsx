import {
    Container,
    Wrapper,
    BuscarInputContainer,
    Input,
    Row,
    MenuRight,
    UserPicture,
} from "./styles";

import { Link } from "react-router-dom";

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
                    <Link to="/login">
                        <Button title="Entrar" />
                    </Link>

                    <Link to="/cadastro">
                        <Button title="Cadastrar" />
                    </Link>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Header;
