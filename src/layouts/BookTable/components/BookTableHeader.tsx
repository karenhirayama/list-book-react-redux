import { Th, Thead, Tr } from "@chakra-ui/react";

export const BookTableHeader= () => {
    return (
        <>
            <Thead>
                <Tr>
                    <Th>Favorite</Th>
                    <Th>Title</Th>
                    <Th>Author</Th>
                    <Th>Read book</Th>
                </Tr>
            </Thead>
        </>
    )
}
