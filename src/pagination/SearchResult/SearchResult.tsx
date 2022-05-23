import { useState, useEffect } from 'react';
import './SearchResult.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { getSearchBookByWord } from '../../api';
import { ButtonComponent } from '../../components';
import { BookTable } from '../../layouts';

export const SearchResult = () => {
  const [bookSearch, setBooksSearch] = useState([]);
  const [pageNumberApi, setPageNumberApi] = useState(1);
  const [maxResultPages, setMaxResultPages] = useState(1);
  const [maxNumberResponseApi, setMaxNumberResponseApi] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { searchWord } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSearchBooks = async () => {
      try {
        const response = await axios.get(getSearchBookByWord(searchWord, pageNumberApi));
        setMaxNumberResponseApi(response.data.count);
        setIsLoading(false);
        return setBooksSearch(response.data.results.map((book: any) => {
          book.favorite = false
          return book
        }));
      }
      catch (error: any) {
        return error.message;
      }
    };
    getSearchBooks();
    setIsLoading(true);
  }, [searchWord, pageNumberApi]);

  useEffect(() => {
    if (bookSearch !== []) return setMaxResultPages(Math.ceil(maxNumberResponseApi / 10))
  }, [searchWord]);

  const handleShowPreviusResults = () => {
    setPageNumberApi(pageNumberApi - 1);
  };

  const handleShowMoreResults = () => {
    setPageNumberApi(pageNumberApi + 1);
  };

  const handleHomePage = () => {
    navigate('/');
  };

  return (
    <>
      {isLoading ? <h1>Loading</h1> :
        <div>
          <BookTable
            books={bookSearch}
          />
          <div className='searchResult__btn'>
            {pageNumberApi > 1 ?
              <ButtonComponent buttonText="Previous" handleClick={handleShowPreviusResults} />
              : null
            }
            <ButtonComponent buttonText="Back to Homepage" handleClick={handleHomePage} />
            {pageNumberApi <= maxResultPages ?
              <ButtonComponent buttonText="Next" handleClick={handleShowMoreResults} />
              : null
            }
          </div>
        </div>
      }
    </>
  )
}
