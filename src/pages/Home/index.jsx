import {FiPlus, FiSearch} from "react-icons/fi";
import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";


import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Section} from "../../components/Section";
import { Note } from "../../components/note";

import { ButtonText } from "../../components/ButtonText";


export function Home() {
    return(
<Container>
<Brand>
<h1>Rocketnotes</h1>
</Brand>

<Header/>
<Menu>
<li><ButtonText title="todos" isActive /></li>
<li><ButtonText title="react" /></li>
<li><ButtonText title="nodejs" /></li>

</Menu>

<Search>
<Input placeholder="pesquisar pelo titulo" icon={FiSearch} />
</Search>

<Content>
<Section title= "minhas notas">
<Note data={{title: 'react',
 tags: [
    {id: '1', name: 'react'},
    {id: "2", name: "rocketseat"}

]
 }}
 />
 
</Section>
</Content>

<NewNote to="/new">
<FiPlus/>
Criar nota
</NewNote>

</Container>

    );
}