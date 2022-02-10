import { popper } from "@popperjs/core";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./css/componentstyle.css";
import "./css/date.css";

const DateRange = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          props.onchangeFunction(
            "startDate",
            date.toISOString().substring(0, 10)
          );
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        maxDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          props.onchangeFunction(
            "endDate",
            date.toISOString().substring(0, 10)
          );
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};
export default DateRange;
