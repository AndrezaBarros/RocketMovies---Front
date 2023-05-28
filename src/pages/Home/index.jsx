import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Movie } from "./style";
import { AiOutlinePlus } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { api } from "../../service/api";
import { Rating } from "../../components/Rating";
import { Tags } from "../../components/Tags";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const navigateTo = useNavigate();

  function handleDetail(id) {
    navigateTo(`moviePreview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      console.log("passei aqui");
      const response = await api.get(`/movieNotes?title=${search}`);
      setMovies(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header search={search} setSearch={setSearch}/>

      <div id="title_button">
        <h1>Meus filmes</h1>
        <Button icon={AiOutlinePlus} title="Adicionar filme" id="addMovie" />
      </div>

      <Content>
        {movies &&
          movies.map((movie) => (
            <Movie key={String(movie.id)} onClick={() => handleDetail(movie.id)}>
              <main>
                <div id="identificador">
                  <h2>{movie.title}</h2>
                  <Rating rating={movie.rating} />
                </div>

                <p>{movie.description}</p>

                <div id="tags">
                  {movie.tags &&
                    movie.tags.map((tag) => (
                      <Tags key={String(tag.id)} title={tag.name} />
                    ))}
                </div>
              </main>
            </Movie>
          ))}
      </Content>
    </Container>
  );
}
