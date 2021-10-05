import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem/';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'OGHIYGYIGBIU', done: false },
    { id: 2, name: '325345w345', done: true },
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>
        Lista de Tarefas
        </C.Header>
        {/* Área de tarefas*/}


        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    
    </C.Container>
  );
}
export default App;