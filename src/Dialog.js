import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dialog.css";

function Modal() {
  const [Age, setAge] = useState("");
  const [Occasion, setOccasion] = useState("");
  const [radioValue, setradioValue] = useState("");
  const [isFormValid, setisFormValid] = useState(false);
  const navigate = useNavigate();

  const handleAgeChange = (event) => {
    event.persist();
    setAge(event.target.value);
    validateForm();
  };

  const handleOccasionChange = (event) => {
    event.persist();
    setOccasion(event.target.value);
    validateForm();
  };

  const handleRadioChange = (event) => {
    event.persist();
    setradioValue(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    console.log("DropDown 1", Age);
    console.log("DropDown 2", Occasion);

    const isValid = Age !== "" && Occasion !== "";
    console.log("is form valid", isValid);
    setisFormValid(isValid);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (isFormValid) {
      navigate("/product");
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Dialog_bg">
        <div className="Dialog_box">
          <div className="Dialog_box1">
            <div className="Dialog_title">
              <h2>Choose Your Suggestion Here...</h2>
            </div>
            <div className="body">
              <div>
                <label>
                  <b>Select Age Range: </b>
                </label>
                <select className="age" value={Age} onChange={handleAgeChange}>
                  <option value="age1">Default</option>
                  <option value="age2">5 - 15</option>
                  <option value="age3">15 - 25</option>
                  <option value="age4">25 - 35</option>
                  <option value="age5">35 - 45</option>
                  <option value="age6">45 - 55</option>
                </select>
              </div>

              <div>
                <label>
                  <b>Select Occasion:</b>
                </label>
                <select
                  className="occasion"
                  value={Occasion}
                  onChange={handleOccasionChange}
                >
                  <option value="occasion1">Default</option>
                  <option value="occasion2">Birthday</option>
                  <option value="occasion3">Anniversary</option>
                  <option value="occasion4">Valentines day</option>
                  <option value="occasion5">House warming</option>
                  <option value="occasion6">Fathers day</option>
                  <option value="occasion7">Mothers day</option>
                  <option value="occasion8">Brothers day</option>
                </select>
              </div>

              <div>
                <label>
                  <b>Select Gender: </b>
                </label>
                <input
                  className="gender"
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={radioValue === "Male"}
                  onChange={handleRadioChange}
                />

                <b> Male</b>

                <input
                  className="gender"
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={radioValue === "Female"}
                  onChange={handleRadioChange}
                />

                <b>Female</b>
              </div>
            </div>

            <div className="footer">
              <button id="cancelBtn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Modal;
