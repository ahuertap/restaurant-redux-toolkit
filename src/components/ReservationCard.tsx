import React from 'react';
import { useDispatch } from 'react-redux';

import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
};

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  const handleClickRemoveReservationCard = () => {
    dispatch(removeReservation(index));
  };

  return <div onClick={handleClickRemoveReservationCard} className="reservation-card-container">{name}</div>;
}

export default ReservationCard;
