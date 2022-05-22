import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableContainer, Tbody, Tr } from '@chakra-ui/react';
import { fetchBooks, seletcAllBooks } from '../../../../features/book/bookSlice'
import { BookTableHeader } from './BookTableHeader';
import { BookTableBody } from './BookTableBody';

export const BookTable = () => {
  const bookStatus = useSelector((state: any) => state.books.status);
  const books = useSelector(seletcAllBooks)
  console.log(bookStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks() as any)
    }
  }, [bookStatus, dispatch]);

  return (
    <div>
      {bookStatus === 'succeeded' ? <TableContainer>
        <Table variant='striped' colorScheme='teal' size='lg'>
          <BookTableHeader />
          <Tbody>
            {books?.map((book: any, index: number) => (
              <Tr key={index}>
                <BookTableBody
                  id={book.id}
                  favorite={book.favorite}
                  author={book.agents[0]['person']}
                  title={book.title}
                  resources={book.resources}
                />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      : <h1>...Loading</h1>
      }
    </div>
  )
}
