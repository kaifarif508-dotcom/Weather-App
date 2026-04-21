import React from "react";

const Rain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[20px] bg-blue-200 opacity-60 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.4 + Math.random()}s`,
            animationDelay: `${Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Rain;