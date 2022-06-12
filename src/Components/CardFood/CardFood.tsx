import React, { useState } from "react";
import "./CardFood.css";
import { Button } from "../Button/Button";
import { IFoodOrder } from "../../types/foodOrder.interface";
import arrowRight from "../../images/arrow-right.svg";

interface ICardFoodProps {
  food: IFoodOrder;
  onAdd: (food: IFoodOrder) => void;
  onRemove: (food: IFoodOrder) => void;
}

export const CardFood = ({ food, onAdd, onRemove }: ICardFoodProps) => {
  const [count, setCount] = useState(0);
  const { name, srcImage, price, id, category, isAvailable, description } =
    food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      {isAvailable ? null : (
        <span className="not-available">not available</span>
      )}
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={srcImage} alt={name} />
      </div>
      <div className="card-text">
        <span className="card__title">{name}</span>
        <span className="card__price">{price} AED</span>
        {count === 0 ? (
          <button
            className="btn-container"
            onClick={handleIncrement}
            disabled={!isAvailable}
          >
            Add to Cart{" "}
            <img className="btn-container__image" src={arrowRight} />
          </button>
        ) : (
          <div className="btn-container">
            <button onClick={handleIncrement} disabled={!isAvailable}>
              +
            </button>
            <button onClick={handleDecrement} disabled={!isAvailable}>
              -
            </button>
          </div>
        )}
        {/* <button
          className={`btn ${
            (type === "add" && "add") ||
            (type === "remove" && "remove") ||
            (type === "checkout" && "checkout")
          }`}
          disabled={disable}
          onClick={onClick}
        >
          {title}
        </button> */}
      </div>
      {/* <div className="btn-container">
        <Button
          title={"+"}
          type={"add"}
          onClick={handleIncrement}
          disable={false}
        />
        {count !== 0 ? (
          <Button
            title={"-"}
            type={"remove"}
            onClick={handleDecrement}
            disable={false}
          />
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
};
