import React, { useState, useCallback } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

// 과제
// 첫 화면은 Add New Expense 버튼만 보임
// 버튼 클릭시 NewExpense가 보여짐
// NewExpense에 cancle 버튼 추가
// cancle 버튼을 클릭하면 다시 첫 화면인 Add New Expense가 보여짐

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  const showFormHandler = useCallback(() => {
    setShowForm(true);
  }, []);
  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeFormHandler}
          name="Juhee"
        />
      ) : (
        <button type="button" onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
