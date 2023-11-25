import React, { useState } from "react";
import List from "./List";

const Buttons = () => {
  const [selectCategory, setSelectCategory] = useState("All");

  const handleChangeCategory = (category) => {
    setSelectCategory(category);
  };
  return (
    <>
      <div className="container">
        <div className="buttonDiv d-flex justify-content-evenly">
          <button
            className={`${
              selectCategory === "All"
                ? "btn btn-secondary"
                : "btn btn-outline-secondary"
            }`}
            onClick={() => handleChangeCategory("All")}
          >
            All
          </button>
          <button
            className={`${
              selectCategory === "Foods"
                ? "btn btn-secondary"
                : "btn btn-outline-secondary"
            }`}
            onClick={() => handleChangeCategory("Foods")}
          >
            Foods
          </button>
          <button
            className={`${
              selectCategory === "Desserts"
                ? "btn btn-secondary"
                : "btn btn-outline-secondary"
            }`}
            onClick={() => handleChangeCategory("Desserts")}
          >
            Desserts
          </button>
          <button
            className={`${
              selectCategory === "Drinks"
                ? "btn btn-secondary"
                : "btn btn-outline-secondary"
            }`}
            onClick={() => handleChangeCategory("Drinks")}
          >
            Drinks
          </button>
        </div>
      </div>
      <List selectCategory={selectCategory} />
    </>
  );
};

export default Buttons;
