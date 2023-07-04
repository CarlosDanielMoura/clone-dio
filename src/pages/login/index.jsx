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

const Login = () => {
    return (
        <Container>
            <Header pag="Home"></Header>

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
                        <Button
                            variant="secundary"
                            title="Entrar"
                            type="submit"
                        />
                    </form>

                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarAccountText>Criar conta</CriarAccountText>
                    </Row>
                </Containerleft>
            </Wrapper>
        </Container>
    );
};

export default Login;
