import React from 'react';
import '../components/main.css'

function SignUpPage() {
  return (
    <div className="container">
      <main>
        <section className="signup-page-container">
          <div className="signup-image-section">
            <div className="icon-wrapper"></div>
            <div className="app-name">
              <span className="highlight">e</span>SELFI<span className="highlight">Mo</span>
            </div>
            <div className="signup-cta-section">
              <div className="signup-cta-title">Create an account</div>
              <div className="signup-cta-description">Enter your email to sign up for this app</div>
            </div>
            <form className="signup-form-section">
              <label htmlFor="emailInput" className="signup-visually-hidden">Enter your email</label>
              <input className="signup-email-input form-control" type="email" id="emailInput" placeholder="Enter your email" aria-label="Enter your email" />
              <button type="submit" className="signup-sign-up-button btn btn-primary">Sign up with email</button>
            </form>
            <div className="alternative-section">
              <div className="line"></div>
              <div className="alternative-text">or continue with</div>
              <div className="line"></div>
            </div>
            <button className="signup-google-signin btn btn-outline-primary" onClick={() => window.location.href='https://www.google.com'} tabIndex="0">
              <div className="signup-google-signin-content">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c76e3dbb471149adf112709c924f5d7f6ebb1241ede5184d2c532ef5fa9ac27?apiKey=609ea6f127c44e01b472f307c4e4204e&" alt="Google Icon" className="signup-google-icon" />
                <div className="signup-google-text">Google</div>
              </div>
            </button>
            <button className="signup-facebook-signin btn btn-outline-primary" onClick={() => window.location.href='https://www.facebook.com'} tabIndex="0">
              <div className="signup-facebook-signin-content">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a6a8d361aaf4a370766de0dbecc01813ef5bd1cf9c2c92658aaf76f04f96147?apiKey=609ea6f127c44e01b472f307c4e4204e&" alt="Facebook Icon" className="signup-facebook-icon" />
                <div className="signup-facebook-text">Facebook</div>
              </div>
            </button>
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

export default SignUpPage;
