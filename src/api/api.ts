export const getAllBooksPerPage = (pageNumber: number) => `https://gnikdroy.pythonanywhere.com/api/book/?page=${pageNumber}`;

export const getBookByQuery = (query: string, pageNumber: number ) => `https://gnikdroy.pythonanywhere.com/api/book/?&title_contains=${query}&page=${pageNumber}`