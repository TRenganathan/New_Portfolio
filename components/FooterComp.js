import { FmdGood, Mail, Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { GitHub, LinkedIn, NearMe, Twitter } from "@mui/icons-material";
import Link from "next/link";
const FooterComp = () => {
  const contactGrid = (item, key) => {
    return (
      <Box
        className="bg-[#2b2c32] rounded min-w-[500px] min-h-[70px] max-w-[650px] flex items-center  gap-5 px-5"
        key={key}
      >
        {item?.icon ? item.icon : <Mail sx={{ fontSize: "50px" }} />}
        <h4 className="text-[#cbacf9] font-semibold text-[22px]">
          {item.title}
        </h4>
      </Box>
    );
  };
  const socialMedia = [
    {
      id: 1,
      img: <LinkedIn />,
      link: "/linkedin",
    },
    {
      id: 2,
      img: <Twitter />,
      link: "/twitter",
    },
    {
      id: 3,
      img: <GitHub />,
      link: "https://github.com/TRenganathan",
    },
  ];
  const contectDetails = [
    {
      title: "vijay@gmail.com",
      icon: <Mail />,
    },
    {
      title: "9159912181",
      icon: <Phone />,
    },
    {
      title: "Coimbatore, TN.",
      icon: <FmdGood />,
    },
  ];
  return (
    <div className="bg-[#3d3e42] ">
      <Typography
        className="text-center text-[50px] font-bold"
        component={"h2"}
        sx={{
          position: "relative",
          top: "-37px",
          "&::before": {
            content: `""`,
            position: "absolute",
            left: 0,
            backgroundColor: "#cbacf9",
            width: "40%",
            height: "3px",
            top: 0,
            bottom: 0,
            margin: "auto",
          },
          "&::after": {
            content: `""`,
            position: "absolute",
            right: 0,
            backgroundColor: "#cbacf9",
            width: "40%",
            height: "3px",
            top: 0,
            bottom: 0,
            margin: "auto",
          },
        }}
      >
        Contact Me
      </Typography>
      <div className="max-w-[1050px] flex items-center justify-center flex-wrap m-auto gap-8 py-10 pb-20">
        {contectDetails?.map((item, i) => {
          return contactGrid(item, i);
        })}
      </div>
      <Typography
        className="text-center text-[50px] font-bold flex items-center justify-center gap-10"
        component={"h2"}
        sx={{
          position: "relative",
          top: "-0",
          "&::before": {
            content: `""`,
            position: "absolute",
            left: 0,
            backgroundColor: "#cbacf9",
            width: "40%",
            height: "3px",
            top: 0,
            bottom: 0,
            margin: "auto",
          },
          "&::after": {
            content: `""`,
            position: "absolute",
            right: 0,
            backgroundColor: "#cbacf9",
            width: "40%",
            height: "3px",
            top: 0,
            bottom: 0,
            margin: "auto",
          },
        }}
      >
        {socialMedia?.map((info) => (
          <Link
            title={info.link}
            href={info.link}
            target="_blank"
            key={info.id}
            className="w-[45px] h-[45px] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-[12px] border border-black-300 "
          >
            {info.img}
          </Link>
        ))}
      </Typography>
    </div>
  );
};

export default FooterComp;
