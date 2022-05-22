import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComponent } from "../../components";
import { fetchBooks, selectAllBooks } from "../../features";
import { BookTable, SearchBooks } from "../../layouts";
import { NotFound } from '../index'

export const Home = () => {
  const [pageNumberApi, setPageNumberApi] = useState(1)
  const bookStatus = useSelector((state: any) => state.books.status);
  const books = useSelector(selectAllBooks);

  const dispatch = useDispatch();
  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks(1) as any)
    }
  }, [bookStatus, dispatch]);

  const handleSeeMoreBooks = () => {
    setPageNumberApi(pageNumberApi + 1);
    dispatch(fetchBooks(pageNumberApi) as any)
  };

  return (
    <>
      {bookStatus === 'succeeded' &&
        <>
          <SearchBooks />
          <BookTable
            books={books}
          />
          <ButtonComponent buttonText="See more" handleClick={handleSeeMoreBooks} />
        </>
      }
      {bookStatus === 'loading' &&
        <>
        <h1>Loading</h1>
        </>
      }
      {bookStatus === 'failed' &&
        <>
        <NotFound /> 
        </>
      }
    </>
  )
}