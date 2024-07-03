import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from '../features/transactions/transactionSlice';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const TransactionList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const status = useSelector((state) => state.transactions.status);
  const error = useSelector((state) => state.transactions.error);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (
      (!startDate || transactionDate >= start) &&
      (!endDate || transactionDate <= end)
    );
  });

  if (status === 'loading') {
    return <SpinnerContainer><ClipLoader size={50} color="#123abc" /></SpinnerContainer>;
  }

  if (status === 'failed') {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div>
      <FilterContainer>
        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date: </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </FilterContainer>
      <List>
        {filteredTransactions.map((transaction) => (
          <ListItem key={transaction.id}>
            {transaction.type === 'income' ? (
              <Income>{transaction.type}: ${transaction.amount} - {transaction.category}</Income>
            ) : (
              <Expense>{transaction.type}: ${transaction.amount} - {transaction.category}</Expense>
            )}
            <DateComp>{transaction.date}</DateComp>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 10px;
  }
  input {
    padding: 5px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const Income = styled.span`
  color: green;
`;

const Expense = styled.span`
  color: red;
`;

const DateComp = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

export default TransactionList;
