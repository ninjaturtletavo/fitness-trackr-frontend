import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { registerUser, setToken } from "../api";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setPassword("");
      return setError("Passwords do not match!");
    }

    try {
      // setError("");
      setLoading(true);
      const response = await registerUser(username, password);
      console.log(response);

      // if (result.error) {
      //   setUsername("");
      //   setPassword("");
      //   setPasswordConfirm("");
      //   setError("Sorry, username is already taken, try again!");
      // }
      if (response) {
        setToken(response.token);

        if (response.user && response.user.username) {
          setUsername(response.user.username);
          history.push("/");
        }
      }
    } catch (error) {
      setError("Failed to create an account");
      throw error;
    }

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="text">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="text"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/users/login">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
