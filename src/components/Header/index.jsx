import { RxExit } from "react-icons/rx"
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/kennedysmartins.png" alt="Foto do usuário"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>Kennedy Martins</strong>
                </div>
            </Profile>
            <Logout>
            <RxExit/>
            </Logout>
            
        </Container>
    )
}