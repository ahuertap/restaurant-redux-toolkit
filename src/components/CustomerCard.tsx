import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardTypes) => {
  const [customerFood, setCustomerFood] = useState("");

  const handleChangeInputFood = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerFood(event.target.value);
  };

  const dispatch = useDispatch();

  const handleClickAddFood = () => {
    if (!customerFood) return;

    dispatch(addFoodToCustomer({
      id,
      food: customerFood,
    }));

    setCustomerFood("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((foodItem, index) => {
            return <p key={index}>{foodItem}</p>
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFood} onChange={handleChangeInputFood} />
          <button onClick={handleClickAddFood}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard;
