import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./Auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-section">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="auth-card shadow-lg">
          <Card.Body>
            <h2 className="text-center mb-3 auth-title">
              {isLogin ? "Welcome Back 🎵" : "Create Your Account 🎶"}
            </h2>
            <p className="text-center mb-4 text-muted">
              {isLogin
                ? "Log in to continue your musical journey."
                : "Join Harmoniq and start learning today!"}
            </p>

            <Form>
              {!isLogin && (
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" required />
              </Form.Group>

              <div className="d-grid mt-4">
                <Button variant="primary" type="submit" className="auth-btn">
                  {isLogin ? "Log In" : "Register"}
                </Button>
              </div>
            </Form>

            <div className="text-center mt-4">
              {isLogin ? (
                <p className="text-muted">
                  Don’t have an account?{" "}
                  <span className="auth-link" onClick={handleToggle}>
                    Create one
                  </span>
                </p>
              ) : (
                <p className="text-muted">
                  Already have an account?{" "}
                  <span className="auth-link" onClick={handleToggle}>
                    Log in
                  </span>
                </p>
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div className="auth-bg"></div>
    </div>
  );
};

export default AuthPage;
