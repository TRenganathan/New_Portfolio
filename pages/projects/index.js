import { Box, keyframes } from "@mui/material";
import React from "react";
const myEffectExit = keyframes`rotate {%     { --angle: 0deg; }, 100%   { --angle: 360deg; }}`;
const Projects = () => {
  return (
    <div className="flex items-center justify-center m-auto max-w-[1000px] flex-wrap gap-2">
      {[1, 2, 3, 4, 5, 6].map((project) => (
        <Box
          sx={{
            position: '"relative"',
            zIndex: 1,
            "&:hover::before": {
              background: "#9cca12",
              content: '"Project"',
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              margin: "auto",
              zIndex: 900,
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "20px",
              fontWeight: 700,

              opacity: 0.9,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: -"0.2rem",
              zIndex: -1,
              background:
                "linear-gradient(var(--angle), #032146,  #C3F2FF, #b00)",
              animation: `${myEffectExit} 10s linear infinite`,
            },
            "&:hover::after": {
              filter: "blur(10px)",
            },
          }}
          className="bg-black-100 shadow w-[200px] h-[200px] flex items-center justify-center flex-wrap flex-col rounded p-3 text-center"
          style={{ filter: "drop-shadow(2px 4px 6px #00801788)" }}
        >
          <h3 className="font-semibold text-[18px] text-[#19e83ecf]">
            React Project
          </h3>
          <p>
            lorem ispum react project kira dir weee gjwn hendined hbehiuh
            oojiojiedc{" "}
          </p>
        </Box>
      ))}
    </div>
  );
};

export default Projects;
