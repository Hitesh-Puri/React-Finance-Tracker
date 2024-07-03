import styled from "styled-components";
import AddTransaction from "./components/AddTransaction";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import CategoryBreakdown from "./components/CategoryBreakdown";

function App() {
  return (
    <>
      <Title>Personal Finanace Tracker</Title>
      <Container>
        <AddTransaction />
        <Summary />
        <TransactionList />
        <CategoryBreakdown />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export default App;
