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
  const maxNumberPageApi = 6578;

  const dispatch = useDispatch();
  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks(1) as any)
    }
  }, [bookStatus]);

  const handleSeeMoreBooks = () => {
    dispatch(fetchBooks(pageNumberApi + 1) as any);
    setPageNumberApi(pageNumberApi + 1);
  };

  return (
    <>
      {bookStatus === 'succeeded' &&
        <>
          <SearchBooks />
          <BookTable
            books={books}
          />
          {pageNumberApi <= maxNumberPageApi ?
            <ButtonComponent buttonText="See more" handleClick={handleSeeMoreBooks} />
            : null
          }
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