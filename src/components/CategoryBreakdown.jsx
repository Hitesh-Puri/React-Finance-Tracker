import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styled, { keyframes } from 'styled-components';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF5733', '#33FFBD'];

const CategoryBreakdown = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const expenseTransactions = transactions.filter((t) => t.type === 'expense');
  const categoryData = expenseTransactions.reduce((acc, curr) => {
    const category = acc.find((item) => item.name === curr.category);
    if (category) {
      category.value += curr.amount;
    } else {
      acc.push({ name: curr.category, value: curr.amount });
    }
    return acc;
  }, []);

  return (
    <Container>
      <Title>Category Breakdown</Title>
      <StyledPieChart width={400} height={400}>
        <Pie
          data={categoryData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </StyledPieChart>
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
  text-align: center;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const StyledPieChart = styled(PieChart)`
  margin: 0 auto;
`;

export default CategoryBreakdown;
