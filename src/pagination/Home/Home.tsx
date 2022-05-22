import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, seletcAllBooks } from "../../features";
import { BookTable, SearchBooks } from "../../layouts";

export const Home = () => {
  const bookStatus = useSelector((state: any) => state.books.status);
  const books = useSelector(seletcAllBooks);

  const dispatch = useDispatch();
console.log(books)
  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks() as any)
    }
  }, [bookStatus, dispatch]);

  return (
    <>
      <SearchBooks />
      <BookTable status={bookStatus}
        books={books}
      />
    </>
  )
}