import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const CountryFlag = () => {
  const [value, setValue] = useState();

  const handleChange = (newValue: any) => {
    console.log(newValue, "country flag");
    setValue(newValue);
  };
  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default CountryFlag;
