import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css'
import Pagination from './components/Pagination';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(''); 
  const [currentPage, setCurrentPage] = useState(0);
  const [ItemsPerPage] = useState(10);
  // Pagination 
  const indexOfLastItem = ItemsPerPage + currentPage * ItemsPerPage
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage
  console.log(`First Index: ${indexOfFirstItem}`)
  console.log(`Last Index: ${indexOfLastItem}`)
  const currentItem = items.slice(indexOfFirstItem,indexOfLastItem)

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(res.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className='container' style={{marginTop:'3rem'}}> 
      <Header /> 
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid items={currentItem} isLoading={isLoading}/>
      <Pagination ItemsPerPage={ItemsPerPage} totalItems={items.length} paginate={paginate}/>
    </div>
  );
}

export default App;
