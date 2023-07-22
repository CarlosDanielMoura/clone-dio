import {
    ContainerCard,
    ContainerImg,
    Picture,
    Row,
    Column,
    ContainerConteudo,
    Author,
    Time,
    Title,
    SubTitle,
    Hashtag,
    Contador,
} from "./styles";
import BannerFeed from "../../assets/banner_feed.png";
import Avatar from "../Avatar";
import ImgUser from "../../assets/avatar.jpg";

const Card = () => {
    return (
        <ContainerCard>
            <ContainerImg>
                <Picture src={BannerFeed} alt="banner do feed" />
            </ContainerImg>
            <ContainerConteudo>
                <Row>
                    <Avatar src={ImgUser} alt="Profile que realizou o post" />
                    <Column>
                        <Author>Pablo Henrique</Author>
                        <Time>Há 8 minutos</Time>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Title>Projeto para curso de HTML e CSS</Title>
                        <SubTitle>
                            Projeto feito no curso de html e css no bootcamp da
                            dio do Global avanade... <strong>Ver Mais</strong>
                        </SubTitle>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Hashtag>#HTML #CSS #Javascript</Hashtag>
                        <Contador>10</Contador>
                    </Column>
                </Row>
            </ContainerConteudo>
        </ContainerCard>
    );
};
export default Card;
