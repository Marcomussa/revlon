/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ContestImage = ({ imageSrc, background }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsVisible(false);
    }
  }, [timeLeft]);

  const calculateColor = () => {
    if (timeLeft > 30) {
      const greenToYellowRatio = (timeLeft - 30) / 30;
      const r = 255 - (255 - 76) * greenToYellowRatio;
      const g = 235 + (171 - 235) * greenToYellowRatio;
      return `rgb(${r}, ${g}, 50)`;
    } else {
      const yellowToRedRatio = timeLeft / 30;
      const r = 244 + (255 - 244) * yellowToRedRatio;
      const g = 67 * yellowToRedRatio;
      return `rgb(${r}, ${g}, 50)`;
    }
  };

  const circleProgress = (timeLeft / 60) * 100;
  const timerColor = calculateColor();

  return (
    <>
      <div>
        <div
          className=" d-flex justify-content-center"
          style={{
            position: "relative",
            width: "100%",
            height: "",
          }}
        >
          {isVisible ? (
            <>
              <div
                style={{
                  background: background,
                  padding: "3px",
                  borderRadius: "2%"
                }}
                className="image-container"
              >
                <img
                  src={imageSrc || "https://placehold.co/300x300"}
                  alt="Temporary visible image"
                  style={{ width: "100%", height: "100%", borderRadius: "2%" }}
                  
                />
              </div>
            </>
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "24px",
              }}
            >
              <b>El tiempo ha finalizado</b>
            </div>
          )}
        </div>
        {/* Timer circular en la esquina superior derecha */}
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div
            className="timer"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              border: `4px solid ${timerColor}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: `conic-gradient(${timerColor} ${circleProgress}%, #d3d3d3 0%)`,
              transition: "background-color 1s linear", // Transición suave
            }}
          >
            <span style={{ color: "#fff", fontSize: "22px", fontWeight: 700 }}>
              {timeLeft}s
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestImage;
