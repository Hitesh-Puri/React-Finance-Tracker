import { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { addTransaction } from "../features/transactions/transactionSlice";

const AddTransaction = () => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ type, amount: parseFloat(amount), category, date }));
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </Select>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <Input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button type="submit">Add Transaction</Button>
    </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default AddTransaction;
