import {Container, Links, Content} from './styles';

import {Header} from "../../components/Header"
import {Button} from "../../components/Button"
import {Section} from "../../components/Section"
import {Tag} from "../../components/Tag"
import {ButtonText} from "../../components/ButtonText"





export function Details() {
  
  return (
    <Container>

    <Header/>
<main>
  <Content>
    
<ButtonText title="excluir nota" />

<h1> Introducao ao React</h1>

<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sunt eos molestiae reprehenderit eligendi qui. Asperiores, non molestias architecto modi nemo fugiat obcaecati, fuga numquam officiis ducimus deserunt, nostrum eveniet.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor optio rem tenetur assumenda a! Quia laboriosam aliquam eveniet ipsa, doloremque repellat ab cumque molestiae alias, distinctio omnis, tempora reprehenderit voluptatem!

</p>

<Section title="Links Úteis" >
 <Links>
  <li> <a href="#">https://www.teste.com.br/</a> </li>
  <li> <a href="#">https://www.teste.com.br/</a> </li>
  

 </Links>
</Section>

<Section title="Marcadores" >
<Tag title="express" />

<Tag title="nodejs" />

</Section>

<Button title="Voltar"/>

</Content>
</main>

    </Container>
  )
}