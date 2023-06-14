import { Container, Links } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

function Index() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota"/>
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">link teste </a>
          </li>
          <li>
            <a href="#">testando</a>
          </li>
          <li>
            <a href="#">Coisa nova</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="react" />
        <Tag title="node" />
      </Section>

      <Button title={"Voltar"} />
    </Container>
  );
}

export default Index;
