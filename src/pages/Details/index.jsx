import { Container } from "./style"
import { Button } from "../../components/Button"

function Index() {
   return (
    <Container>
       <h1>Teste</h1>
       
       <Button title={"Botão"}/>
       <Button title={"Login"} loading/>
    </Container>
  )
}

export default Index
