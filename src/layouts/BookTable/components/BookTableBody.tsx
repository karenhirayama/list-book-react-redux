import { FC } from "react";
import './BookTableBody.css'
import { Container, Td } from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { bookFavorite } from "../../../features";
import { useParams } from 'react-router-dom';

interface BookTableHeaderProps {
  id: number;
  favorite?: boolean;
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
  const params = useParams();
  const isHomePage = Object.values(params).length === 0;
  const linkRead: any = resources?.find((resource: ResourcesProps) => resource.uri.includes('h.htm'));

  const handleFavorite = (id: number) => {
    dispatch(bookFavorite(id) as any)
  };
  return (
    <>
      {isHomePage ?
        <Td>
          <Container centerContent>
            <StarIcon
              color={favorite ? 'yellow' : 'gray'}
              onClick={() => handleFavorite(id)}
            />
          </Container>
        </Td> : null
      }
      <Td>
        <div title={title} className="tableBody__title">
          {title}
        </div>
      </Td>
      <Td>{author}</Td>
      <Td>
        <Container centerContent>
          <a href={encodeURI(linkRead?.uri)} target={"_blank"} rel={"noreferrer"}>
            <ExternalLinkIcon />
          </a>
        </Container>
      </Td>
    </>
  )
}
