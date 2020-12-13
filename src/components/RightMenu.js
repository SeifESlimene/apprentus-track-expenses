import React, { useState } from "react";
import { Link } from "react-router-dom";

function RightMenu() {
  const [orangeStroke, setOrangeStroke] = useState("#B9BDC9");
  const onMouseEnter = () => {
    setOrangeStroke("rgb(255, 72, 14)");
  };
  const onMouseLeave = () => {
    setOrangeStroke("#B9BDC9");
  };
  return (
    <div
      style={{
        width: "30%",
        height: "100vh",
      }}
    >
      <div style={{ paddingTop: "35px", textAlign: "center" }}>
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="67" height="67" rx="17" fill="#FF480E" />
          <g clipPath="url(#clip0)">
            <path
              d="M33.1955 33.8045C27.7165 33.8045 23.276 29.3737 23.276 23.9068C23.276 18.4398 27.7165 14.009 33.1955 14.009C38.6744 14.009 43.115 18.4398 43.115 23.9068C43.115 29.3737 38.6744 33.8045 33.1955 33.8045ZM26.2518 36.2789H27.546C29.2664 37.0676 31.1806 37.5161 33.1955 37.5161C35.2104 37.5161 37.1168 37.0676 38.8449 36.2789H40.1391C45.8893 36.2789 50.5546 40.9339 50.5546 46.6715V49.8883C50.5546 51.9374 48.8884 53.5999 46.8348 53.5999H19.5562C17.5025 53.5999 15.8364 51.9374 15.8364 49.8883V46.6715C15.8364 40.9339 20.5016 36.2789 26.2518 36.2789Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="34.7182"
                height="39.5909"
                fill="white"
                transform="matrix(-1 0 0 1 50.5546 14.009)"
              />
            </clipPath>
          </defs>
        </svg>
        <div
          style={{
            textAlign: "center",
            margin: "10px 0 20px",
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          John Doe
        </div>
        <div
          style={{
            margin: "70px auto 0",
            width: "75px",
            height: "75px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <Link
            to="/expense"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "#B9BDC9",
            }}
          >
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="37.5"
                y1="26.5"
                x2="37.5"
                y2="48.5"
                stroke={orangeStroke}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="26.5"
                y1="37.5"
                x2="48.5"
                y2="37.5"
                stroke={orangeStroke}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="74"
                height="74"
                rx="14.5"
                stroke={orangeStroke}
                strokeDasharray="4 4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
