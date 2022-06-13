import React, { useEffect } from "react";
import "./LIstFood.css";
import { IFoodOrder } from "../../types/foodOrder.interface";
import { CardFood } from "../CardFood/CardFood";

interface IListFoodProps {
  foods: IFoodOrder[];
  onAdd: (food: IFoodOrder) => void;
  onRemove: (food: IFoodOrder) => void;
}

export const ListFood = React.memo(
  ({ foods, onAdd, onRemove }: IListFoodProps): JSX.Element => {
    useEffect(() => {}, []);
    return (
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <CardFood
              food={food}
              key={food.id}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    );
  }
);
