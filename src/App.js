import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // Pagination 
  const indexOfLastItem = currentPage * postsPerPage
  const indexOfFirstItem = indexOfLastItem - postsPerPage
  const currentItem = items.slice(indexOfFirstItem,indexOfLastItem)

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(res.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className='container' style={{marginTop:'3rem'}}> 
      <Header /> 
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid items={currentItem} isLoading={isLoading}/>
    </div>
  );
}

export default App;
