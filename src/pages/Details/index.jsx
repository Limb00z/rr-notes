import { Container, Links, Content } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React.js</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum, repellendus corrupti tenetur ratione qui ducimus nostrum error assumenda reprehenderit adipisci Dignissimos illum, repellendus corrupti tenetur ratione qui ducimus nostrum error assumenda reprehenderit adipisci Dignissimos illum, repellendus corrupti tenetur ratione qui ducimus nostrum error assumenda reprehenderit adipisci inventore soluta deleniti odit sint commodi. Ipsam, porro similique?</p>

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
        </Content>
      </main>
    </Container>
  );
}
