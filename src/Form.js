import { useState } from "react";
import isEmail from "./ValidateEmail.js";
import arrowIcon from "./images/icon-arrow.svg";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorIcon, setErrorIcon] = useState("");
  const [errorOutline, setErrorOutline] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!isEmail(email)) {
      setErrorOutline("error-outline");
      setErrorIcon("error");
      setError("Please provide a valid email");
    } else {
      setError("");
      setErrorOutline("");
      setErrorIcon("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      isEmail(email) &&
      email !== null &&
      email !== undefined &&
      email !== ""
    ) {
      setErrorOutline("");
      setErrorIcon("");
      setError("");
      setEmail("");
    } else {
      setErrorOutline("error-outline");
      setErrorIcon("error");
      setError("Please provide a valid email");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className={`form-container flex-row-center ${errorIcon}`}>
        <input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={errorOutline}
        />
        <button className="flex-row-center">
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </div>
      {error && (
        <p style={{ color: "var(--soft-red)", margin: ".6rem 0 0 2rem" }}>
          {error}
        </p>
      )}
    </form>
  );
}
