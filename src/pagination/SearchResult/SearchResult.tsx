import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getSearchBookByWord } from '../../api';
import { BookTable } from '../../layouts';

export const SearchResult = () => {
  const [bookSearch, setBooks] = useState([]);
  const { searchWord } = useParams();

  useEffect(() => {
    const getSearchBooks = async () => {
      try {
        const response = await axios.get(getSearchBookByWord(searchWord, 1));
        return setBooks(response.data.results.map((book: any) => {
          book.favorite = false
          return book
        }));
      }
      catch (error: any) {
        return error.message;
      }
    }
    getSearchBooks();
  }, [searchWord])

  return (
    <div>
      <BookTable
        books={bookSearch}
      />
    </div>
  )
}
