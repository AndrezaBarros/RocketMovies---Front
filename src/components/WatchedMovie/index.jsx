import { Container } from "./style";

import { Evaluation } from "../Evaluation";
import { Tags } from "../Tags";

export function WatchedMovie() {
    return(
        <Container>
            <main>
                <h2>Interestellar</h2>

                <Evaluation/>   

                <p>Pragas nas colheitas fizeram a civilização humana 
                    regredir para uma sociedade agrária em futuro de 
                    data desconhecida. Cooper, ex-piloto da NASA, tem 
                    uma fazenda com sua família. Murphy, a filha de dez 
                    anos de Cooper, acredita que seu quarto está assombrado 
                    por um fantasma que tenta se... 
                </p>

                <div id="tags">
                    <Tags title="Ficção Científica"/>
                    <Tags title="Drama"/>
                    <Tags title="Família"/>
                </div>
            </main>
        </Container>
    )
}