import { Container, Profile } from "./style";

import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div id="input">
        <Input placeholder="Pesquisar pelo título" type="text" />
      </div>

      <Profile>
        <div>
          <h2>Andreza Tiezzi</h2>
          <ButtonText title="sair" onClick={signOut} />
        </div>

        <img src="https://github.com/AndrezaBarros.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
