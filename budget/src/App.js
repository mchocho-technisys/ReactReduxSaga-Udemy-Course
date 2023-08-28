import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import './App.css';
import EntryLines from './components/EntryLines';

const INITIAL_STATE = [
  {
    id: 1,
    title: "Work Income",
    value: 1000.00,
  },
  {
    id: 2,
    title: "Water bill",
    value: 200.00,
    isExpense: true,
  },
  {
    id: 3,
    title: "Wifi bill",
    value: 50.00,
    isExpense: true,
  },
]


function App() {
  const [entries, setEntries] = useState(INITIAL_STATE);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  const addEntry = (title, value, isExpense) => {
    const result = entries.concat(({
      id: entries.length+1,
      title,
      value,
      isExpense
    }));
    setEntries(result);
  }

return (
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />    

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;
