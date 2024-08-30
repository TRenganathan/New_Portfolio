import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Box
      container
      className=" flex items-center gap-10 flex-wrap max-w-[1100px] m-auto"
    >
      <Box item md={4}>
        <Image src={require("/public/images/hero.png")} alt="hero-imag" />
      </Box>
      <Box item md={6} className="">
        <p className="text-base text-[30px] block">Hi. I'm </p>

        <p className="text-lg text-[#fefdff] text-[35px] block font-bold py-5">
          Ranganath T
        </p>
        <p className="text-[20px] max-w-[460px]">
          A <span className="text-[#03c998]">{"<full stack developer />"}</span>{" "}
          with 3 years of commercial experience creating successfull websites..
        </p>
        <Button
          className=" capitalize text-[#fefdff]"
          style={{
            border: "2px solid #03c998",
            fontWeight: 500,
            fontSize: "15px",
            padding: "1px 14px",
            borderRadius: "10px",
            marginTop: "30px",
          }}
        >
          Hire Me
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
