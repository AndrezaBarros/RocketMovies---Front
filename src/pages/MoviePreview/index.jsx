import { Container, Content } from "./style";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";

import { api } from "../../service/api";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tags } from "../../components/Tags";

export function MoviePreview() {
  const [data, setData] = useState();
  const navigateTo = useNavigate();
  const params = useParams(null);

  function handleBack() {
    navigateTo(-1);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Content>
          <ButtonText icon={FiArrowLeft} title="Voltar" onClick={() => handleBack()}/>

          <div>
            <h1>{data.title}</h1>
            <Rating rating={data.rating} />
          </div>

          <div id="details">
            <img
              src="https://github.com/AndrezaBarros.png"
              alt="Foto do usuário"
            />
            <span>Por {data.user.name}</span>
            <HiOutlineClock size={19} />
            <span>{data.updated_at ?? data.created_at}</span>
          </div>

          {data.tags && (
            <div id="tags">
              {data.tags.map((tag) => (
                <Tags key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <div id="sinopseMovie">
            <p>{data.description}</p>
          </div>
        </Content>
      )}
    </Container>
  );
}
