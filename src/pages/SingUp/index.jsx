import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Container, Form, Background } from './styles.js';
import { Button} from '../../components/Button/index.jsx'
import { Input } from '../../components/Input/index.jsx'


export function SingUp() {
    return (
        <Container>
            <Background/>
            <Form>
                <h1>RR-Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Criar conta"/>

                <a href="#">Voltar para login</a>
            </Form>
       </Container> 
    )
}