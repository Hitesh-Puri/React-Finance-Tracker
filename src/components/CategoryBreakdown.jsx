import { useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import styled from 'styled-components';

const CategoryBreakdown = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const expenses = transactions.filter((transaction) => transaction.type === 'expense');

  const categoryData = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key]
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ChartContainer>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export default CategoryBreakdown;
