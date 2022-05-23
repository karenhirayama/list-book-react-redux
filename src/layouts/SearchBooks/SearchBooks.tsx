import './SearchBooks.css'
import { Input, InputGroup, InputLeftElement, Stack, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { ButtonComponent } from '../../components';
import { useNavigate } from 'react-router-dom';

export const SearchBooks = () => {
  const [bookTitle, setBookTitle] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${bookTitle}`);
  }

  return (
    <VStack>
      <Stack className='container__input'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray' />}
          />
          <Input type='text' variant='outline' placeholder='Search' size='md'
            value={bookTitle}
            onChange={(e: any) => setBookTitle(e.target.value)} />
        </InputGroup>
        <ButtonComponent buttonText='Search' handleClick={handleSearch} />
      </Stack>
    </VStack>
  )
}
