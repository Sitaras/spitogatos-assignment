import React, { useState } from "react";
import "./ContactUs.css";
import Map from "../../imgs/Map.png";
import { styled } from "@mui/material/styles";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "56px",
  },
  "& label.Mui-focused": {
    color: "#4B00FF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#4B00FF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderRadius: "28px",
    },
    "&:hover fieldset": {
      borderColor: "#4B00FF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4B00FF",
    },
  },
});
const MessageTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#4B00FF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#4B00FF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderRadius: "28px",
    },
    "&:hover fieldset": {
      borderColor: "#4B00FF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4B00FF",
    },
  },
});

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subCategory: "",
    message: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subCategory: "",
    message: "",
  });

  const [error, setError] = useState({
    name: true,
    email: true,
    phone: true,
    category: true,
    subCategory: true,
    message: true,
  });

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name,
    });
  };

  function validateEmail(email) {
    let validRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@spitogatos.gr$/;

    console.log(email);
    console.log(!!email.toLowerCase().match(validRegex));
    return !!email.toLowerCase().match(validRegex);
  }

  const validateFields = async (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setError({ ...error, [event.target.name]: false });
    setErrorMessages({ ...errorMessages, [event.target.name]: "" });
    if (event.target.value === "" || event.target.value === null) {
      setError({ ...error, [event.target.name]: true });
      setErrorMessages({
        ...errorMessages,
        [event.target.name]: "Empty Field",
      });
    } else if (event.target.name === "email") {
      if (!validateEmail(event.target.value)) {
        setErrorMessages({
          ...errorMessages,
          [event.target.name]: "E-mail isn't valid",
        });
      }
    }
  };

  return (
    <section id="contact" className="autoScreens">
      <div className="containerContact">
        <div className="mapContainer">
          <img src={Map} alt="map" className="map" />
        </div>
        <form className="form">
          <h2>Contact Us</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div className="textField">
            <CssTextField
              name="name"
              label="Full Name"
              required
              sx={{ width: "100%" }}
              onBlur={validateFields}
              error={errorMessages.name === "Empty Field"}
            />
            <p>This field is required</p>
          </div>
          <div className="textField">
            <CssTextField
              name="email"
              label="Email"
              required
              sx={{ width: "100%" }}
              onBlur={validateFields}
              error={
                errorMessages.email === "Empty Field" ||
                errorMessages.email === "E-mail isn't valid"
              }
            />
            <p>This field is required</p>
          </div>
          <div className="textField">
            <CssTextField
              name="phone"
              sx={{ width: "100%" }}
              label="Phone"
              required
              onBlur={validateFields}
            />
            <p>This field is required</p>
          </div>
          <div className="selects">
            <CssTextField
              name="category"
              sx={{ width: "100%" }}
              select
              label="Category"
              onBlur={validateFields}
            />
            <CssTextField
              name="subCategory"
              sx={{ width: "100%" }}
              select
              label="SubCategory"
              onBlur={validateFields}
            />
          </div>
          <div className="textField">
            <MessageTextField
              name="message"
              sx={{ width: "100%" }}
              label="Message"
              multiline
              rows={5}
              onChange={handleForm}
              onBlur={validateFields}
            />
            <p>{500 - formData.message.length}</p>
          </div>
          <div className="checkboxContainer">
            <p>Please select at least one of the following:</p>
            <div className="checkboxes">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Option 1"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Option 2"
              />
            </div>
          </div>
          <button className="searchBtn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
