import Header from "../../components/Header";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import {
    Container,
    ContainerLeft,
    ContainerRight,
    Paragraph,
    Title,
    Wrapper,
    SubTitle,
    ParagraphRight,
    ParagraphRightSub,
    FazerLogin,
} from "./styles";
const Cadastro = () => {
    return (
        <Container>
            <Header autenticado={false} />

            <Wrapper>
                <ContainerLeft>
                    <Paragraph>
                        A plataforma para você aprender com experts, dominar as
                        principais tecnologias e entrar mais rápido nas empresas
                        mais desejadas.
                    </Paragraph>
                </ContainerLeft>

                <ContainerRight>
                    <Title>Comece agora grátis</Title>
                    <SubTitle>Crie sua conta e make the change._</SubTitle>
                    <form>
                        <Input
                            type="text"
                            leftIcon={<BiSolidUser />}
                            name="nome"
                            placeholder="Nome completo"
                        />
                        <Input
                            type="email"
                            leftIcon={<MdEmail />}
                            name="email"
                            placeholder="E-mail"
                        />
                        <Input
                            type="password"
                            leftIcon={<MdLock />}
                            name="password"
                            placeholder="Password"
                        />
                        <Button
                            type="submit"
                            variant="secundary"
                            title="Criar minha conta"
                        />
                    </form>
                    <ParagraphRight>
                        Ao clicar em "criar minha conta grátis", declaro que
                        aceito as Políticas de Privacidade e os Termos de Uso da
                        DIO.
                    </ParagraphRight>
                    <ParagraphRightSub>
                        Já tenho conta.{" "}
                        <Link to="/login">
                            <FazerLogin> Fazer login</FazerLogin>
                        </Link>
                    </ParagraphRightSub>
                </ContainerRight>
            </Wrapper>
        </Container>
    );
};
export default Cadastro;
