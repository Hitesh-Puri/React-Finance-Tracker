import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Summary = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <SummaryContainer>
      <SummaryItem>Total Income: ₹{totalIncome}</SummaryItem>
      <SummaryItem>Total Expenses: ₹{totalExpenses}</SummaryItem>
      <SummaryItem>Balance: ₹{balance}</SummaryItem>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 20px 0;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SummaryItem = styled.div`
  font-size: 1.2rem;
`;

export default Summary;
