import {FiPlus, FiSearch} from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Section} from '../../components/Section'
import {ButtonText} from '../../components/ButtonText'
import { Note } from '../../components/Note';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RR-NOTES</h1>
            </Brand>

            <Header /> 
            
            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React', tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'nodejs' }
                        ]
                    }} />
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    )
}