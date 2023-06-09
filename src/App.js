import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "치약",
    amount: 1000,
    date: new Date(2023, 2, 14),
  },
  {
    id: "e2",
    title: "크랜베리아몬드그래놀라350g",
    amount: 6180,
    date: new Date(2023, 2, 8),
  },
  {
    id: "e3",
    title: "우유식빵",
    amount: 2600,
    date: new Date(2023, 2, 8),
  },
  {
    id: "e4",
    title: "남양고소한락토",
    amount: 2980,
    date: new Date(2023, 2, 8),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    // setExpenses(expenses.concat(expense));
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    // setExpenses에 전달된 콜백함수는 react에 의해 자동으로 실행된다.
    // 여기서 prevExpenses는 이전 state
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
