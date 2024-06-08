import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../components/main.css';
import modIcon from './Resource/book.png';
import camIcon from './Resource/phone.png';
import actIcon from './Resource/activity.png';
import userIcon from './Resource/user.png';

const CameraAccessPage = () => {

  useEffect(() => {
    const video = document.getElementById('video');
    const startCameraButton = document.getElementById('start-camera');

    const handleStartCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (err) {
        console.error('Error accessing camera: ', err);
        alert('Error accessing camera: ' + err.message);
      }
    };

    startCameraButton.addEventListener('click', handleStartCamera);

    return () => {
      startCameraButton.removeEventListener('click', handleStartCamera);
    };
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
    <div className="Main-BG">
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

      <main className="container-fluid content-container">
        <div className="module-content-container camera-container">
          <h2>Camera Access</h2>
          <button id="start-camera" className="btn btn-primary">Start Camera</button>
          <video id="video" autoPlay playsInline></video>
          <button id="start-generate" className="btn">Generate Shape</button>
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
    </div>
  );
};

export default CameraAccessPage;
