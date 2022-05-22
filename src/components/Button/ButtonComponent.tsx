import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';

interface ButtonComponentProps {
  buttonText: string;
  handleClick: any;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({ buttonText, handleClick }) => {
  return (
    <Stack>
      <Button colorScheme='yellow' variant='outline' onClick={handleClick}>
        {buttonText}
      </Button>
    </Stack>
  )
};
