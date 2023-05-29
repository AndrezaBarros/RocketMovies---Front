import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Background } from "./style";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigateTo = useNavigate();

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  function handleSignUp() {
    navigateTo("/signUp")
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça o seu login</h2>

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

        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText title="Criar conta" id="createAccount" onClick={() => handleSignUp()}/>
      </Form>

      <Background />
    </Container>
  );
}
