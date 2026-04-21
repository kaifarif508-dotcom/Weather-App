import React from "react";

const Clouds = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      <style>{`
        .cloud {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          opacity: 0.6;
          filter: blur(2px);
          animation: moveClouds 25s linear infinite;
        }

        .cloud1 {
          width: 120px;
          height: 60px;
          top: 20%;
          left: -150px;
        }

        .cloud2 {
          width: 180px;
          height: 80px;
          top: 40%;
          left: -200px;
          animation-duration: 35s;
        }

        .cloud3 {
          width: 100px;
          height: 50px;
          top: 60%;
          left: -120px;
          animation-duration: 20s;
        }

        @keyframes moveClouds {
          from { transform: translateX(0); }
          to { transform: translateX(120vw); }
        }
      `}</style>
    </div>
  );
};

export default Clouds;