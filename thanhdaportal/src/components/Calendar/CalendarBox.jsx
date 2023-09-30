import React, { useState } from 'react';
import './Calendar.scss';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarBox = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calendar-box'>
      <Calendar className='calendar-react' onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarBox
