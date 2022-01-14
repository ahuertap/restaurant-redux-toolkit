import React from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuid } from 'uuid';

import { removeReservation } from '../features/reservationSlice';
import { addCostumer } from '../features/customerSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
};

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  const handleClickRemoveReservationCard = () => {
    dispatch(removeReservation(index));
    dispatch(addCostumer({
      id: uuid(),
      name,
      food: []
    }));
  };

  return <div onClick={handleClickRemoveReservationCard} className="reservation-card-container">{name}</div>;
}

export default ReservationCard;
