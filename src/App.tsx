import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReservationCard from "./components/ReservationCard";

import { RootState } from "./app/store";
import { addReservation } from "./features/reservationSlice";

import "./App.css";

function App() {
  const [reservationName, setReservationName] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value);

  const handleChangeReservation = (event: ChangeEvent<HTMLInputElement>) => {
    setReservationName(event.target.value);
  };

  const dispatch = useDispatch();

  const handleClickAddReservation = () => {
    if (!reservationName) return;

    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name) => {
                return <ReservationCard name={name} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={handleChangeReservation} />
            <button onClick={handleClickAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
