import { Link } from "react-router-dom"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"





import { Container, Form } from "./styles";

export function New() {
    return (
        <Container>
        <Header/>

        <main>
            <Form>
                <header>
                    <h1>
                        Criar nota
                    </h1>
                    <Link to="/">Voltar</Link>
                </header>

                <Input placeholder="titulo" />
                <Textarea placeholder="Observacoes" />
                
<Section title="links uteis">
<NoteItem value="https://rocketseat.com.br" />
<NoteItem isNew placeholder="novo link"/>

</Section>

<Section title="Marcadores">
    <div className="tags">
<NoteItem value="react" />
<NoteItem isNew placeholder="nova Tag"/>
    </div>
</Section>
<Button title="salvar"/>
            </Form>
        </main>
        </Container>
        )
}