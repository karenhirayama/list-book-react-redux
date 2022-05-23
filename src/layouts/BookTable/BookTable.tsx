import { FC } from 'react';
import { Table, TableContainer, Tbody, Tr } from '@chakra-ui/react';
import { BookTableBody, BookTableHeader } from './components';
import { ExternalLinkIcon } from '@chakra-ui/icons';
interface BookTableProps {
  books: any[];
};

export const BookTable: FC<BookTableProps> = ({ books }) => {
  return (
    <div>
      <TableContainer>
        <Table variant='striped' colorScheme='teal' size='lg'>
          <BookTableHeader />
          <Tbody>
            {books?.map((book: any, index: number) => (
              <Tr key={index} style={{tableLayout: 'fixed', width: '100%'}}>
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
      <div style={{marginTop: '16px', marginLeft: '16px', display: 'flex', flexDirection: 'column', alignItems: 'start', textAlign: 'initial'}}>
        <h1>Tips:</h1>
        <ul>
          <li>If the title is incomplete, you can hover over it and see the full title.</li>
          <li>Click in the <ExternalLinkIcon /> to read book.</li>
        </ul>
      </div>
    </div>
  )
}
