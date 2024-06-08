import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css';
import modIcon from './Resource/book.png';
import camIcon from './Resource/phone.png';
import actIcon from './Resource/activity.png';
import userIcon from './Resource/user.png';

const UserProfile = () => {
  useEffect(() => {
    const modules = document.querySelectorAll(".module-container");
    const moduleContent = document.getElementById("module-content");

    modules.forEach(module => {
      module.addEventListener("click", function() {
        // Remove active class from all modules
        modules.forEach(m => m.classList.remove("active"));
        // Add active class to the clicked module
        this.classList.add("active");
        // Update the module content
        moduleContent.textContent = this.getAttribute("data-content");
      });
    });
  }, []);

  const navigate = useNavigate();

const handleNavigateToMod = () => {
    navigate('/modules');
  };
  const handleNavigateToCam = () => {
    navigate('/cam');
  };
  const handleNavigateToProf = () => {
    navigate('/profile');
  };
  const handleNavigateToAct = () => {
    navigate('/activity');
  };

  return (
      <body className="Main-BG">
        <div className="header">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <div className="main-logo">
                <a className="navbar-brand" onClick={handleNavigateToMod} style={{cursor: 'pointer'}}>
                  <span className="highlight">e</span>SELFI<span className="highlight">Mo</span>
                </a>
              </div>
              <div className="navbar-center">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={handleNavigateToMod} style={{cursor: 'pointer'}}>
                      <img className="iconitem" src={modIcon} alt="Module" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleNavigateToCam} style={{cursor: 'pointer'}}>
                      <img className="iconitem" src={camIcon} alt="Module" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleNavigateToAct} style={{cursor: 'pointer'}}>
                      <img className="iconitem" src={actIcon} alt="Module" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleNavigateToProf} style={{cursor: 'pointer'}}>
                      <img className="iconitem" src={userIcon} alt="Module" />
                    </a>
                  </li>
                </ul>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2 search-bar" type="search" placeholder="Circumference" aria-label="Search" />
              </form>
            </nav>
          </div>
        </div>
          
        <div className="profile-container">
          <div className="profile-picture"></div>
          <div className="profile-info">
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <p>New York, USA</p>
          </div>
          <div className="additional-info">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, nunc et porttitor pellentesque, metus felis fermentum nisi, at scelerisque neque sem vel leo.</p>
            <h3>Interests</h3>
            <p>Programming, Gaming, Reading</p>
            <h3>Contact</h3>
            <p>Email: johnlloyd@example.com</p>
            <p>Phone: 09152223409</p>
          </div>
        </div>

        <div className="footer">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="modules.html">
                <img className="iconitem" src="Resource/book.png" alt="Module" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cam.html">
                <img className="iconitem" src="Resource/phone.png" alt="Module" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="activity.html">
                <img className="iconitem" src="Resource/activity.png" alt="Module" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile.html">
                <img className="iconitem" src="Resource/user.png" alt="Module" />
              </a>
            </li>
          </ul>
        </div>
      </body>
  );
};

export default UserProfile;
