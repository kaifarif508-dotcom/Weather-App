import React from "react";

const Sun = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="sun"></div>

      <style>{`
        .sun {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #ffdd00, #ff9900);
          border-radius: 50%;
          box-shadow: 0 0 60px rgba(255, 200, 0, 0.8);
          animation: pulse 3s infinite alternate;
        }

        @keyframes pulse {
          from {
            transform: scale(1);
            box-shadow: 0 0 40px rgba(255, 200, 0, 0.6);
          }
          to {
            transform: scale(1.1);
            box-shadow: 0 0 80px rgba(255, 200, 0, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Sun;