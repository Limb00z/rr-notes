import { FiMail, FiLock } from 'react-icons/fi'

import { Container, Form } from './styles.js';
import { Button} from '../../components/Button'
import { Input } from '../../components/Input'


export function SingIn() {
    return (
        <Container>
            <Form>
                <h1>RR-Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>
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

                <Button title="Entrar"/>
            </Form>
       </Container> 
    )
}