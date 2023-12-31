import {
    Container,
    Wrapper,
    BuscarInputContainer,
    Input,
    Row,
    MenuRight,
    UserPicture,
    Text,
} from "./styles";

import { Link } from "react-router-dom";

import Logo from "../../assets/Logo-dio.svg";
import Button from "../Button";

import Avatar from "../Avatar";
import ImgAvatar from "../../assets/avatar.jpg";

import { BsChevronDown } from "react-icons/bs";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <Wrapper>
            <Container>
                <Row>
                    <UserPicture src={Logo} />
                    {user.id ? (
                        <>
                            <BuscarInputContainer>
                                <Input type="Text" placeholder="Buscar" />
                            </BuscarInputContainer>
                            <Text>Live Code</Text>
                            <Text>Global</Text>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {user.id ? (
                        <Row>
                            <Avatar src={ImgAvatar} alt="imagem profile" />
                            <BsChevronDown />
                            <a href="#" onClick={handleSignOut}>
                                Sair
                            </a>
                        </Row>
                    ) : (
                        <>
                            <Link to="/">
                                <MenuRight href="#">Home</MenuRight>
                            </Link>
                            <Link to="/login">
                                <Button title="Entrar" />
                            </Link>
                            <Link to="/cadastro">
                                <Button title="Cadastrar" />
                            </Link>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Header;
