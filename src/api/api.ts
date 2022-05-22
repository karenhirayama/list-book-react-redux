export const getAllBooksPerPage = () => 'https://gnikdroy.pythonanywhere.com/api/book/';

export const getBookByQuery = (query: string, pageNumber: number ) => `https://gnikdroy.pythonanywhere.com/api/book/?&title_contains=${query}&page=${pageNumber}`