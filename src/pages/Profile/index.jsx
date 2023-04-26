import { Container, Form, Avatar } from "./style";
import { useState } from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  return (
    <Container>
      <header>
        <ButtonText icon={FiArrowLeft} title="Voltar" />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/AndrezaBarros.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          icon={FiUser}
          type="text"
          placeholder="Usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
