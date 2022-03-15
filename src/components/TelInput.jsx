// import React, { useState } from "react";
// import MuiPhoneNumber from "material-ui-phone-number";

// function TelInput() {
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <MuiPhoneNumber
//         defaultCountry={"am"}
//          value={value}
//          onChange={setValue}
//       />
//     </>
//   );
// }

// export default TelInput;

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import history from './History';

const TelInput = () => {
  const [random, setRandom] = useState();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  let mathNum = Math.floor(1000 + Math.random() * 9000);
  const onSubmit = (data) => {
    if (data) {
      // return mathNum;
      setRandom(mathNum);
      console.log(mathNum);
    }
  };

  
  const onValidate = (e) => {
    e.preventDefault();
    if (random) {
      // alert("Token is valid");
      history.push({
        pathname: '/accessed'
      })
    }
  };

  return (
    <div className="container">
      <div className="access__token">
        <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
          <div>
            <label htmlFor="phone-input">Phone number</label>
            <Controller
              name="phone-input"
              control={control}
              rules={{
                validate: (value) => isValidPhoneNumber(value),
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  value={value}
                  onChange={onChange}
                  defaultCountry="AM"
                  id="phone-input"
                />
              )}
            />
            {errors["phone-input"] && (
              <p className="error-message">Not valid number</p>
            )}
          </div>
        </form>

        <br />

        <form onSubmit={onValidate}>
          <label htmlFor="validation-input">Validation token</label>
          <br />
          <input type="text" value={random} />
          <br />
          <br />
          <Button type="submit" variant="contained">Enter</Button>
        </form>

        <br />
        <Button variant="contained"><Link to='/'>Log-in</Link></Button>
      </div>
    </div>
  );
};

export default TelInput;
