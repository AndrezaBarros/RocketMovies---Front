import { useNavigate } from "react-router-dom";
import { Container, Profile, LinkProfile } from "./style";

import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({search, setSearch}) {
  const { signOut, user } = useAuth();
  const navigateTo = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

    function handleLogOut() {
      navigateTo(-1);
      signOut()
    }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <div id="input">
        <Input placeholder="Pesquisar pelo título" onChange={(e) => setSearch(e.target.value)}/>
      </div>

      <Profile>
        <div>
          <LinkProfile to="/profile">{user.name}</LinkProfile>
          <ButtonText title="sair" onClick={() => handleLogOut()} />
        </div>

        <img src={avatarUrl} alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
