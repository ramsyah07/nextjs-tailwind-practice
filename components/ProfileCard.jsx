// components/profilecard.jsx
'use client';
import React from 'react';

export default function ProfileCard() {
  return (
    <>
      <div className="flip-container">
        <div className="wrapper">
          {/* Front Face */}
          <div className="card front-face">
            <img 
              src="/image/logo.jpg" // Ganti dengan foto lokal Anda
              alt="Profile"
            />
          </div>

          {/* Back Face */}
          <div className="card back-face">
            <img 
              src="/image/logo.jpg" // Ganti dengan foto lokal Anda
              alt="Profile"
              className="profile-img"
            />
            
            <div className="info">
              <div className="title">
                Ramdani Firmansyah
              </div>
              <p>
                Frontend Developer<br />
                Professional Description
              </p>
            </div>

            <ul>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        
        ::selection {
          color: #fff;
          background: #1cc7d0;
        }

        .flip-container {
          display: grid;
          height: 100vh;
          width: 100vw;
          place-items: center;
          background: linear-gradient(375deg, #1cc7d0, #2ede98);
        }

        .wrapper {
          height: 400px;
          width: 320px;
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .wrapper .card {
          position: absolute;
          height: 100%;
          width: 100%;
          padding: 5px;
          background: #fff;
          border-radius: 10px;
          transform: translateY(0deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
          transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1);
        }

        .wrapper:hover > .front-face {
          transform: rotateY(-180deg);
        }

        .wrapper .card img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .wrapper .back-face {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
          transform: rotateY(180deg);
        }

        .wrapper:hover > .back-face {
          transform: rotateY(0deg);
        }

        .wrapper .back-face .profile-img {
          height: 150px;
          width: 150px;
          padding: 5px;
          border-radius: 50%;
          background: linear-gradient(375deg, #1cc7d0, #2ede98);
        }

        .wrapper .back-face .info {
          text-align: center;
        }

        .back-face .info .title {
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .back-face .info p {
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }

        .back-face ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .back-face ul a {
          display: block;
          height: 40px;
          width: 40px;
          color: #fff;
          text-align: center;
          margin: 0 5px;
          line-height: 38px;
          border: 2px solid transparent;
          border-radius: 50%;
          background: linear-gradient(375deg, #1cc7d0, #2ede98);
          transition: all 0.5s ease;
          text-decoration: none;
        }

        .back-face ul a:hover {
          color: #1cc7d0;
          border-color: #1cc7d0;
          background: linear-gradient(375deg, transparent, transparent);
        }

        /* Font Awesome Icons */
        .fab {
          font-family: "Font Awesome 5 Brands";
          font-weight: 400;
        }

        .fa-facebook-f:before { content: "\\f39e"; }
        .fa-twitter:before { content: "\\f099"; }
        .fa-instagram:before { content: "\\f16d"; }
        .fa-youtube:before { content: "\\f167"; }
      `}</style>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </>
  );
}