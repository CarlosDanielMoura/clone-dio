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

function App() {
    return (
        <Container>
            <Header pag="Home" />
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
                    <Button title="Começar agora" variant="secudary" />
                </ContainerLeft>
                <ContainerRight>
                    <img src={Banner} alt="Banner da home com feedback" />
                </ContainerRight>
            </Wrapper>
        </Container>
    );
}

export default App;
