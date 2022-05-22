export const getAllBooksPerPage = (pageNumber: number) => `https://gnikdroy.pythonanywhere.com/api/book/?page=${pageNumber}`;

export const getSearchBookByWord = (searchWord: any, pageNumber: any ) => `https://gnikdroy.pythonanywhere.com/api/book/?&page=${pageNumber}&search=${searchWord}`