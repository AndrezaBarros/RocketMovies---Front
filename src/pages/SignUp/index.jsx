import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Background } from "./style";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../service/api";

export function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigateTo = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Por favor preencher todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso");
      })
      .catch((error) => {
        if (error.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  function handleSignIn() {
    navigateTo("/");
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <ButtonText
          title="Voltar para o login"
          icon={AiOutlineArrowLeft}
          id="backLogin"
          onClick={() => handleSignIn()}
        />
      </Form>

      <Background />
    </Container>
  );
}
