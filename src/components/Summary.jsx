import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const Summary = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <Container>
      <Card>
        <Title>Total Income</Title>
        <Amount>₹{totalIncome}</Amount>
      </Card>
      <Card>
        <Title>Total Expense</Title>
        <Amount>₹{totalExpense}</Amount>
      </Card>
      <Card>
        <Title>Balance</Title>
        <Amount>₹{balance}</Amount>
      </Card>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Amount = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export default Summary;
