import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
import {
    Container,
    ContainerRight,
    Wrapper,
    Containerleft,
    Title,
    Paragraph,
    Text,
    Row,
    EsqueciText,
    CriarAccountText,
} from "./styles";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Container>
            <Header />

            <Wrapper>
                <ContainerRight>
                    <Text>
                        A plataforma para você aprender com experts, dominar as
                        principais tecnologias e entrar mais rápido nas empresas
                        mais desejadas.
                    </Text>
                </ContainerRight>

                <Containerleft>
                    <Title>Faça seu cadastro</Title>
                    <Paragraph>Faça seu login e make the change._</Paragraph>
                    <form>
                        <Input
                            type="password"
                            placeholder="Senha"
                            leftIcon={<MdEmail />}
                            name="E-mail"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            leftIcon={<MdLock />}
                            name="senha"
                        />
                        <Link to="/feed">
                            <Button
                                variant="secundary"
                                title="Entrar"
                                type="submit"
                                onClick={() => null}
                            />
                        </Link>
                    </form>

                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <Link to="/Cadastro">
                            <CriarAccountText>Criar conta</CriarAccountText>
                        </Link>
                    </Row>
                </Containerleft>
            </Wrapper>
        </Container>
    );
};

export default Login;
