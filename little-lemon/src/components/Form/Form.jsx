import React from 'react'
import "../Form/Form.scss"
import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

const Form = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setNumOfGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };


  return (
    <div>
      <form className='form'  >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} required></input>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={selectedTime} onChange={handleTimeChange} required>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}

        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={numOfGuests} onChange={handleGuestsChange} required></input>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange} required>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" ></input>
      </form>
    </div>
  )
}


export default Form