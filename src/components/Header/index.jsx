import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/Limb00z.png" alt="Foto do usuário" />

        <div>
          <span>Ben-vindo, </span>
          <strong>Ruan Reis</strong>
        </div>
          </Profile>
          <Logout>
              <RiShutDownLine/>
          </Logout> 
    </Container>
  );
}
