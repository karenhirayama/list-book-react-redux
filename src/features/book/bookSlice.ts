import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllBooksPerPage } from '../../api/api';

interface BooksState {
    books: any[];
    status: string;
    error: any;
}

const initialState: BooksState = {
    books: [],
    status: 'idle',
    error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (pageNumber: number) => {
    try {
        const response = await axios.get(getAllBooksPerPage(pageNumber));
        return response.data.results;
    } catch (error: any) {
        return error.message;
    }

});

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        bookFavorite: {
            reducer(state: any, action: any) {
                const { id } = action.payload;
                const existingBook = state.books.books.find((book: any) => book.id === id)
                if (existingBook) {
                    existingBook.favorite = true;
                }

            }
        } as any
    },
    extraReducers(builder: any) {
        builder
            .addCase(fetchBooks.pending, (state: any, action: any) => {
                state.status = 'loading'
            })
            .addCase(fetchBooks.fulfilled, (state: any, action: any) => {
                state.status = 'succeeded'
                const loadedBooks = action.payload.map((book: any) => {
                    book.favorite = false
                    return book

                });
                state.books = state.books?.concat(loadedBooks);
            })
            .addCase(fetchBooks.rejected, (state: any, action: any) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

const booksReducer = bookSlice.reducer;
export default booksReducer;

export const seletcAllBooks = (state: any) => state.books.books;
export const getBookStatus = (state: any) => state.books.status;
export const getBooksErrror = (state: any) => state.books.error;
