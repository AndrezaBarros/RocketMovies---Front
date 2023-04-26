import { Container, Content } from "./style";

import { AiOutlinePlus } from "react-icons/ai"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { WatchedMovie } from "../../components/WatchedMovie";

export function Home() {
    return(
        <Container>
            <Header/>

            <div id="title_button">
                <h1>Meus filmes</h1>
                <Button icon={AiOutlinePlus} title="Adicionar filme" id="addMovie"/>
            </div>

            <Content>
                <div id="movieList">
                    <WatchedMovie/>
                    <WatchedMovie/>
                    <WatchedMovie/>
                </div>
            </Content>

        </Container>
    );
}
