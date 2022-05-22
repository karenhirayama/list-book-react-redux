import { Th, Thead, Tr } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const BookTableHeader = () => {
    const params = useParams();
    const isHomePage = Object.values(params).length === 0;
    return (
        <>
            <Thead>
                <Tr>
                    {isHomePage ?
                        <Th>Favorite</Th>
                        : null
                    }
                    <Th>Title</Th>
                    <Th>Author</Th>
                    <Th>Read book</Th>
                </Tr>
            </Thead>
        </>
    )
}
