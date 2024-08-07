import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const validateEmail = (email) => {
    let valid = true;
    let emailError = "";
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      valid = false;
      emailError = "This is invalid!";
    }

    setError((prevError) => ({ ...prevError, emailError }));
    setFormValid(valid);

    return valid;
  };

  const validatePassword = (password) => {
    let valid = true;
    let passwordError = "";

    if (password.trim() === "") {
      valid = false;
      passwordError = "This is required!";
    } else if (password.trim().length <= 5) {
      valid = false;
      passwordError = "Enter a password of at least 6 characters";
    }

    setError((prevError) => ({ ...prevError, passwordError }));
    setFormValid(valid);

    return valid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormState({ ...formState, [id]: value });

    switch (id) {
      case "email":
        validateEmail(value);
        break;
      case "password":
        validatePassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;

    if (validateEmail(email) && validatePassword(password)) {
      setSubmittedData({ email, password });
      setFormState({
        email: "",
        password: "",
      });
      setFormValid(false);
      setError({
        emailError: "",
        passwordError: "",
      });
      setShowModal(true);
    }
  };

  const { email, password } = formState;

  return (
    <div className="login">
      <div>
        <h1 className="text-warning text-center">LOGIN FORM</h1>
        <form onSubmit={handleSubmit}>
          <label>Enter Email: </label>
          <input
            type="text"
            placeholder="Please enter email"
            onChange={handleChange}
            id="email"
            value={email}
          />
          <p style={{ color: "red" }}>{error.emailError}</p>

          <label>Password: </label>
          <input
            type="password"
            placeholder="Please enter password"
            onChange={handleChange}
            id="password"
            value={password}
          />
          <p style={{ color: "red" }}>{error.passwordError}</p>

          <button className="submit" type="submit">Submit</button>
        </form>
      </div>

      {submittedData && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Submitted Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      
    </div>
  );
};

export default LoginForm;
