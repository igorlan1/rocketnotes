import { FiMail, FiLock, FiUser} from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container,  Form, Background } from "./styles";

export function SignUp() {
    return (
        <Container>
        <Background/>

        <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis</p>

                <h2>Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />
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

                <Button title="cadastrar" />

<Link to="/">Voltar para o login</Link>
        </Form>


        </Container>
    )
}