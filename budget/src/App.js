import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import './App.css';

const INITIAL_STATE = [
  {
    title: "Work Income",
    value: 1000.00,
    isExpense: false,
  },
  {
    title: "Water bill",
    value: 200.00,
    isExpense: true,
  },
  {
    title: "Wifi bill",
    value: 50.00,
    isExpense: true,
  },
]


function App() {
  const [entries, setEntries] = useState(INITIAL_STATE);

return (
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      {entries && entries.map((entry) => (
        <EntryLine isExpense={entry.isExpense} title={entry.title} value={entry.value} />
      ))}      

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
