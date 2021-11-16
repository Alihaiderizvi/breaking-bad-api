import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(res.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <> 
      <Header /> 
      <Search getQuery={getQuery}/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </>
  );
}

export default App;
