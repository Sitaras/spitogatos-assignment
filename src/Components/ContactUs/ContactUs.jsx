import React, { useState } from "react";
import "./ContactUs.css";
import Map from "../../imgs/Map.png";
import { styled } from "@mui/material/styles";
import { Checkbox, FormControlLabel, TextField, MenuItem } from "@mui/material";

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
    option1: false,
    option2: false,
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
      [e.target.name]: e.target.value,
    });
  };

  function validateEmail(email) {
    let validRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@spitogatos.gr$/;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      error.name ||
      error.email ||
      error.phone ||
      (!formData.option1 && !formData.option2)
    ) {
      alert("Empty or incorrect fields!");
    }
    console.log(formData);
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
              value={formData.name}
              onChange={(e) => {
                // only letters allowed
                const regex = /^[a-zA-Z]+$/;
                const value = e.target.value;
                if (value !== "" && !regex.test(value)) {
                  return;
                }
                handleForm(e);
              }}
              onBlur={validateFields}
              error={errorMessages.name !== ""}
            />
            {errorMessages.name === "" ? (
              formData.email.length > 0 ? (
                <p>Help Text</p>
              ) : (
                <p>This field is required</p>
              )
            ) : (
              <p style={{ color: "red" }}>{errorMessages.name}</p>
            )}
          </div>
          <div className="textField">
            <CssTextField
              name="email"
              label="Email"
              required
              sx={{ width: "100%" }}
              value={formData.email}
              onChange={handleForm}
              onBlur={validateFields}
              error={errorMessages.email !== ""}
            />
            {errorMessages.email === "" ? (
              formData.email.length > 0 ? (
                <p>Help Text</p>
              ) : (
                <p>This field is required</p>
              )
            ) : (
              <p style={{ color: "red" }}>{errorMessages.email}</p>
            )}
          </div>
          <div className="textField">
            <CssTextField
              name="phone"
              sx={{ width: "100%" }}
              label="Phone"
              required
              value={formData.phone}
              onChange={(e) => {
                // only numbers allowed
                const regex = /^[0-9]+$/;
                const value = e.target.value;
                if (value !== "" && !regex.test(value)) {
                  return;
                }
                handleForm(e);
              }}
              onBlur={validateFields}
              error={errorMessages.phone !== ""}
            />
            {errorMessages.phone === "" ? (
              formData.phone.length > 0 ? (
                <p>Help Text</p>
              ) : (
                <p>This field is required</p>
              )
            ) : (
              <p style={{ color: "red" }}>{errorMessages.phone}</p>
            )}
          </div>
          <div className="selects">
            <CssTextField
              name="category"
              sx={{ width: "100%" }}
              select
              label="Category"
              onChange={handleForm}
              onBlur={validateFields}
            >
              <MenuItem key={0} value={0}>
                Option 1
              </MenuItem>
            </CssTextField>
            <CssTextField
              name="subCategory"
              sx={{ width: "100%" }}
              select
              label="SubCategory"
              onChange={handleForm}
              onBlur={validateFields}
            >
              <MenuItem key={0} value={0}>
                Option 1
              </MenuItem>
            </CssTextField>
          </div>
          <div className="textField">
            <MessageTextField
              name="message"
              sx={{ width: "100%" }}
              label="Message"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleForm}
              onBlur={validateFields}
              inputProps={{ maxLength: 100 }}
            />
            <p>{100 - formData.message.length}</p>
          </div>
          <div className="checkboxContainer">
            <p>Please select at least one of the following:</p>
            <div className="checkboxes">
              <FormControlLabel
                control={
                  <Checkbox
                    name="option1"
                    value={formData.option1}
                    onChange={() => {
                      setFormData({
                        ...formData,
                        ["option1"]: !formData.option1,
                      });
                    }}
                  />
                }
                label="Option 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="option2"
                    value={formData.option2}
                    onChange={() => {
                      setFormData({
                        ...formData,
                        ["option2"]: !formData.option2,
                      });
                    }}
                  />
                }
                label="Option 2"
              />
            </div>
          </div>
          <button className="searchBtn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
