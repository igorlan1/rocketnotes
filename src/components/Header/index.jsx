import {RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './styles'

export function Header() {

    return(
        <Container>
            <Profile>
                <img src="https://github.com/igorlan1.png" 
                alt="foto do usuario" />

                <div>
                    <span>Bem vindo </span>
                    <strong>Igor Lima</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>

            </Logout>
        </Container>

    )
}