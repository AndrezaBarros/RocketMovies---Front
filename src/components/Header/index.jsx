import { Container, Profile } from "./style";

import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div id="input">
        <Input placeholder="Pesquisar pelo título" type="text" />
      </div>

      <Profile>
        <div>
          <h2>{user.name}</h2>
          <ButtonText title="sair" onClick={signOut} />
        </div>

        <img src={avatarUrl} alt="Foto do usuário"/>
      </Profile>
    </Container>
  );
}
