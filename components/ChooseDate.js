import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fi from "date-fns/locale/fi";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("fi", fi);
const ChooseDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      locale="fi"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default ChooseDate;
