import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/main.css';
import axios from 'axios';

function LoginPage() {
  
  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };
  const handleNavigateModules = () => {
    navigate('/modules');
  };
  

  return (
    <div className="Main-BG">
      <main>
        <section className="login-page-container">
          <div className="login-image-section">
            <div className="login-icon-wrapper"></div>
            <div className="app-name">
              <span className="highlight">e</span>SELFI<span className="highlight">Mo</span>
            </div>
            <div className="cta-section">
              <div className="cta-title">Create an account</div>
              <div className="cta-description">Enter your email to login to this app</div>
            </div>
            <form className="login-form-section">
              <label htmlFor="emailInput" className="visually-hidden">Enter your email</label>
              <input className="login-email-input" type="email" id="emailInput" placeholder="Enter your email" aria-label="Enter your email" />
              <input className="login-password-input" type="password" id="passwordInput" placeholder="Password" aria-label="Enter your password" />
            </form>
            <button className="google-signin" onClick={handleNavigateModules} style={{cursor: 'pointer'}} tabIndex="0">
              <div className="google-signin-content">
                <div className="google-text">Skip for Debugging</div>
              </div>
            </button>
            <div className="terms">
              Don't have an account? <span className="highlight"><u onClick={handleNavigateToSignUp} style={{cursor: 'pointer'}}>Sign Up</u></span>
            </div>
            <div className="terms">
              By clicking continue, you agree to our <span className="highlight">Terms of Service</span> and
              <span className="highlight">Privacy Policy</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
