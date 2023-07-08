import Header from "../../components/Header";
import Card from "../../components/Card";
import {
    Container,
    ContainerRanking,
    Main,
    Wrapper,
    Row,
    Column,
    Barra,
    Author,
    ValorBarra,
    TitleRanking,
} from "./styles";
import Avatar from "../../components/Avatar";
import ImgAvatar from "../../assets/avatar.jpg";
const Feed = () => {
    return (
        <Container>
            <Header autenticado={true} />
            <Wrapper>
                <Main>
                    <h1>Feed</h1>
                    <Card />
                    <Card />
                </Main>
                <ContainerRanking>
                    <TitleRanking># RANKING 5 TOP DA SEMANA</TitleRanking>
                    <Row>
                        <Avatar src={ImgAvatar} alt="Foto do perfil" />
                        <Column>
                            <Author>Pablo Henrique</Author>
                            <Barra>
                                <ValorBarra valor="100"></ValorBarra>
                            </Barra>
                        </Column>
                    </Row>
                    <Row>
                        <Avatar src={ImgAvatar} alt="Foto do perfil" />
                        <Column>
                            <Author>Pablo Henrique</Author>
                            <Barra>
                                <ValorBarra valor="44"></ValorBarra>
                            </Barra>
                        </Column>
                    </Row>
                    <Row>
                        <Avatar src={ImgAvatar} alt="Foto do perfil" />
                        <Column>
                            <Author>Pablo Henrique</Author>
                            <Barra>
                                <ValorBarra valor="88"></ValorBarra>
                            </Barra>
                        </Column>
                    </Row>
                    <Row>
                        <Avatar src={ImgAvatar} alt="Foto do perfil" />
                        <Column>
                            <Author>Pablo Henrique</Author>
                            <Barra>
                                <ValorBarra valor="130"></ValorBarra>
                            </Barra>
                        </Column>
                    </Row>
                </ContainerRanking>
            </Wrapper>
        </Container>
    );
};

export default Feed;
