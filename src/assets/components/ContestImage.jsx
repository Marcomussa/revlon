import { useState, useEffect } from "react";

const ContestImage = () => {
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

  const circleProgress = (timeLeft / 60) * 100;

  return (
    <>
      <div
        className="image-container"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        {isVisible ? (
          <>
            <img
              src="https://placehold.co/300x300"
              alt="Temporary visible image"
              style={{ width: "100%", height: "100%" }}
            />

            {/* Timer circular en la esquina superior derecha */}
            <div
              className="timer"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "4px solid #4caf50",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `conic-gradient(#4caf50 ${circleProgress}%, #d3d3d3 0%)`,
              }}
            >
              <span style={{ color: "#fff", fontSize: "14px" }}>
                {timeLeft}s
              </span>
            </div>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            Imagen no disponible
          </div>
        )}
      </div>
    </>
  );
};

export default ContestImage;
