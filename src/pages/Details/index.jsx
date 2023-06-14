import { Container, Links } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

function Index() {
  return (
    <Container>
      <Header />
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
           
        </Section>
        
      <Button title={"Voltar"} />
    </Container>
  );
}

export default Index;
