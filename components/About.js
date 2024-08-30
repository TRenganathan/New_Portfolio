import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box className="p-10 max-w-[1100px] m-auto">
      <h2 className="text-[35px] font-bold">About</h2>
      <span
        style={{
          backgroundColor: "#03c998",
          display: "inline-block",
          width: "50px",
          height: "2px",
        }}
      ></span>
      <p className="inline text-[16px] pl-5" style={{}}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet.
      </p>
    </Box>
  );
};

export default About;
