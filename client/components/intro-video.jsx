import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function IntroVideo() {
  const [playVideo, setPlayVideo] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    const queryParams = {};

    params.forEach((value, key) => {
      queryParams[key] = decodeURIComponent(value);
    });

    return queryParams;
  };

  const queryParams = getQueryParams();
  const { name, company, position, logo } = queryParams;

  const handleViewPortfolio = () => {
    navigate('/');
  };

  return (
    <div className="intro-container bg-main">
      <div className="overlay-intro"></div>
      <div className="intro-text">
        <h1>Hi {name || 'there'}, Welcome to My Introduction Video</h1>
        {logo && <img src={logo} alt={`${company} logo`} className="company-logo" />}
        <p>I'm excited about the opportunity to be a {position || 'QA engineer'} at {company || 'CrowdStrike'}</p>
      </div>
      <div className="video-wrapper">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/qiVMIbHKfC0?si=GVSVp6XoYC2dsncz?autoplay=1"
          title="Introduction Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <button className="view-portfolio-button" onClick={handleViewPortfolio}>
        View Portfolio
      </button>
    </div>
  );
}

export default IntroVideo;
