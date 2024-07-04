import styled, { keyframes } from "styled-components";
import AddTransaction from "./components/AddTransaction";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import CategoryBreakdown from "./components/CategoryBreakdown";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Personal Finance Tracker</Title>
        </Header>
        <Content>
          <AddTransaction />
          <Summary />
          <TransactionList />
          <CategoryBreakdown />
        </Content>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto; /* Added margin to create spacing */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px auto;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 300px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url("/finance.jpg") no-repeat center center/cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

export default App;
