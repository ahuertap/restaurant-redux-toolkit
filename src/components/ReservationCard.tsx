import React from 'react';

interface ReservationCardTypes {
  name: string;
};

const ReservationCard = ({ name }: ReservationCardTypes) => {
  return <div className="reservation-card-container">{name}</div>;
}

export default ReservationCard;
