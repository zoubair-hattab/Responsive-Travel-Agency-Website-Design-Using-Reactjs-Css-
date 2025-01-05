import React, { useState } from 'react';
import './hero.css';
import video0 from '../../assets/images/vid-1.mp4';
import video1 from '../../assets/images/vid-2.mp4';
import video2 from '../../assets/images/vid-3.mp4';
import video3 from '../../assets/images/vid-4.mp4';
import video4 from '../../assets/images/vid-5.mp4';

const Hero = () => {
  const [active, setAcitve] = useState(0);
  const [video, setVideo] = useState(video0);
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worthhwhile</h3>
        <p>discover new places withus, adventure awaits</p>
        <a href="#" className="btn">
          discover more
        </a>
      </div>
      <div className="controls">
        {[
          { vid: video0 },
          { vid: video1 },
          { vid: video2 },
          { vid: video3 },
          { vid: video4 },
        ].map((item, index) => (
          <span
            key={index}
            className={`vid-btn ${active == index ? ' active' : ''}`}
            onClick={() => {
              setAcitve(index);
              setVideo(item.vid);
            }}
          ></span>
        ))}
      </div>
      <div className="video-container">
        <video src={video} loop autoPlay muted></video>
      </div>
    </section>
  );
};

export default Hero;
