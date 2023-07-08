// import Button from "../../components/Button";
import Header from "../../components/Header";
import {
    Container,
    ContainerLeft,
    ContainerRight,
    Paragraph,
    Title,
    Wrapper,
} from "./styles";
import Button from "../../components/Button";
import Banner from "../../assets/banner-homer.png";

function Home() {
    return (
        <Container>
            <Header autenticado={false} />
            <Wrapper>
                <ContainerLeft>
                    <Title>
                        <span> Implemente</span> <span>seu fututo global</span>
                        agora!
                    </Title>
                    <Paragraph>
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo em comunidade com os melhores
                        experts.
                    </Paragraph>
                    <Button
                        title="Começar agora"
                        variant="secudary"
                        onClick={() => null}
                    />
                </ContainerLeft>
                <ContainerRight>
                    <img src={Banner} alt="Banner da home com feedback" />
                </ContainerRight>
            </Wrapper>
        </Container>
    );
}

export default Home;
