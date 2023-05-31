import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Content } from "./style";

import { FiArrowLeft } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import { api } from "../../service/api";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigateTo = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      alert("Por favor insira um título para o seu filme.");
    }

    if (!rating) {
      alert("Por favor insira uma nota de 0 a 5 para este filme.");
    }

    if (newTag) {
      alert(
        "Você preencheu o campo de tag, mas não adicionou. Por favor adicione ou deixe o campo vazio"
      );
    }
    await api
      .post("/movieNotes", { title, rating, description, tags })
      .then(() => {
        alert("Filme criado com sucesso");
        navigateTo("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
          navigateTo("/");
        } else {
          return alert("Não foi possível criar o filme");
        }
      });
  }

  function handleBack() {
    navigateTo(-1);
  }

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText icon={FiArrowLeft} title="Voltar" onClick={() => handleBack()}/>

        <h2>Novo Filme</h2>

        <Form>
          <div id="input">
            <Input
              placeholder="Título"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Section>

          <div id="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
