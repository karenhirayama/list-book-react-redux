import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, getBooksErrror, getBookStatus, seletcAllBooks } from '../../../../features/book/bookSlice'

export const BookTable = () => {
  const books: any = useSelector(seletcAllBooks);
  const bookStatus: string = useSelector(getBookStatus);
  const booksError: any = useSelector(getBooksErrror);

  const dispatch = useDispatch();

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks(1) as any)
    }
  },[bookStatus, dispatch])

  return (
    <div>
    </div>
  )
}
