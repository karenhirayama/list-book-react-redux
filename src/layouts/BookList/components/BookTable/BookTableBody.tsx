import { FC } from "react";
import { Container, Td } from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { bookFavorite } from "../../../../features";

interface BookTableHeaderProps {
  id: number;
  favorite: boolean;
  author: string;
  title: string;
  resources: any[];
};

interface ResourcesProps {
  id: number;
  uri: string;
  type: string;
}

export const BookTableBody: FC<BookTableHeaderProps> = ({ id, favorite, author, title, resources }) => {
  const dispatch = useDispatch();
  const linkRead: any = resources?.find((resource: ResourcesProps) => resource.uri.includes('h.htm'));

  const handleFavorite = (id: number) => {
    dispatch(bookFavorite(id) as any)
  }
  return (
    <>
      <Td>
        <Container centerContent>
          <StarIcon
            color={favorite ? 'yellow' : 'gray'}
            onClick={() => handleFavorite(id)}
          />
        </Container>
      </Td>
      <Td>{title}</Td>
      <Td>{author}</Td>
      <Td>
        <a href={encodeURI(linkRead?.uri)} target={"_blank"} rel={"noreferrer"}>
          <ExternalLinkIcon />
        </a>
      </Td>
    </>
  )
}
