import { FiMail, FiLock} from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container,  Form, Background } from "./styles";

export function SignIn() {
    return (
        <Container>
        <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis</p>

                <h2>faca seu login</h2>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                 <Input
                placeholder="E-mail"
                type="password"
                icon={FiLock}
                />

                <Button title="Entrar" />

<Link to="/register">
    Criar conta
    </Link>
        </Form>
        <Background/>


        </Container>
    )
}