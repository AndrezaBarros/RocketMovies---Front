import { Container, Form, Content } from "./style";

import { FiArrowLeft } from "react-icons/fi"

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

export function CreateMovie() {
    return(
        <Container>
            <Header/>

            <Content>
                <ButtonText 
                    icon={FiArrowLeft}
                    title="Voltar"
                />

                <h2>Novo Filme</h2>

                <Form>
                    <div id="input">   
                        <Input
                            placeholder="Título"
                            type="text"
                        />

                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                        />
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Novo marcador"/>
                    </Section>

                    <div id="buttons">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>

                </Form>
            </Content>
        </Container>
    )
}