import React from 'react'
import "../Form/Form.scss"
import { useState } from 'react';

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
      <form className='form'>
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange}></input>

        <label for="res-time">Choose time</label>
        <select id="res-time " value={selectedTime} onChange={handleTimeChange}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}

        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
        <label for="occasion">Occasion</label>
        <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"></input>
      </form>
    </div>
  )
}

export default Form