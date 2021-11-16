import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters`)
      setItems(res.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <> 
      <Header /> 
      <CharacterGrid items={items} isLoading={isLoading}/>
    </>
  );
}

export default App;
