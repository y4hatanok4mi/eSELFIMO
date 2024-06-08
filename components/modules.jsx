import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../components/main.css';
import modIcon from './Resource/book.png';
import camIcon from './Resource/phone.png';
import actIcon from './Resource/activity.png';
import userIcon from './Resource/user.png';
import checkIcon from './Resource/checked.png';


const Home = () => {
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

        <main className="container">
          <div className="row">
            <section className="col-12 col-md-6 modules-container">
              <ul id="module-list">
                <li className="module-container" data-content="Dimensional shapes (2D-3D) content">
                  <div className="module-icon"><img src={checkIcon} alt="icon" /></div>
                  <div className="module">
                    <div className="module-text">Dimensional shapes (2D-3D)</div>
                  </div>
                </li>
                <li className="module-container" data-content="Lengths, Widths, and Heights content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Lengths, Widths, and Heights</div>
                    </div>
                </li>
                <li className="module-container" data-content="Angles content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Angles</div>
                    </div>
                </li>
                <li className="module-container" data-content="Surface Area content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Surface Area</div>
                    </div>
                </li>
                <li className="module-container" data-content="Volume content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Volume</div>
                    </div>
                </li>
                <li className="module-container" data-content="Circumference content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Circumference</div>
                    </div>
                </li>
                <li className="module-container" data-content="Radius content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Radius</div>
                    </div>
                </li>
                <li className="module-container" data-content="Vertices content">
                    <div className="module-icon">
                        <img src={checkIcon} alt="icon" />
                    </div>
                    <div className="module">
                        <div className="module-text">Vertices</div>
                    </div>
                </li>

              </ul>
            </section>
            <section className="col-12 col-md-6">
              <div className="module-content-container">
                <div className="module-content" id="module-content"></div>
              </div>
            </section>
          </div>
        </main>

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

export default Home;
