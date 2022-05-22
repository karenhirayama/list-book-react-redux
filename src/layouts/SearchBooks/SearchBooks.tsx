import './SearchBooks.css'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { ButtonComponent } from '../../components';

export const SearchBooks = () => {
  const [bookTitle, setBookTitle] = useState('');

  const handleSearch = () => {
    console.log(bookTitle)
  }

  return (
    <Stack className='container__input'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='gray' />}
        />
        <Input type='text' variant='outline' placeholder='Search book by title' size='md'
          value={bookTitle}
          onChange={(e: any) => setBookTitle(e.target.value)} />
      </InputGroup>
      <ButtonComponent buttonText='Search' handleClick={handleSearch} />
    </Stack>
  )
}
