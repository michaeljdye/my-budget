import React, { useState, SyntheticEvent } from "react";

export const ExpenseItemsCreate = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(category);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <button>Add Category</button>
    </form>
  );
};
