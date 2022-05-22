import { FC } from 'react';
import { Table, TableContainer, Tbody, Tr } from '@chakra-ui/react';
import { BookTableBody, BookTableHeader } from './components';

interface BookTableProps {
  status: any;
  books: any[];
};

export const BookTable: FC<BookTableProps> = ({ status, books }) => {
  return (
    <div>
      {status === 'succeeded' ? <TableContainer>
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
