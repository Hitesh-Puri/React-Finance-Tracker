import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    transactions: [],
    status: 'idle',
    error: null
  }

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3001/transactions');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/transactions', transaction);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong';
      });
  }
});

export default transactionSlice.reducer;
