import { Container, Profile } from "./styles";

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
    </Container>
  );
}
