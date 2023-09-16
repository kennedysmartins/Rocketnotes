import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Container, Links, Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nam enim quo, ducimus distinctio tempora natus harum quas rem adipisci veniam fugit cum at maxime assumenda quidem soluta beatae iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nam enim quo, ducimus distinctio tempora natus harum quas rem adipisci veniam fugit cum at maxime assumenda quidem soluta beatae iure.</p>
          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
