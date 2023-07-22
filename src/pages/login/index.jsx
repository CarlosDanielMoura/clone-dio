import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

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
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
    const { handleLogin } = useAuth();

    const schema = yup
        .object({
            email: yup
                .string()
                .email("E-mail inválido")
                .required("Digite um e-mail válido"),
            password: yup
                .string()
                .min(6, "Senha curta, mínimo 6 caracteres")
                .required("Mínimo 6 caracteres"),
        })
        .required();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData) => {
        handleLogin(formData);
    };

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            placeholder="E-mail"
                            leftIcon={<MdEmail />}
                            name="email"
                            control={control}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            leftIcon={<MdLock />}
                            name="password"
                            control={control}
                            errorMessage={errors.password?.message}
                        />
                        <Button
                            title="Entrar"
                            variant="secondary"
                            type="submit"
                        />

                        <ToastContainer autoClose={3000} transition={Flip} />
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
