import Image from "next/image";
import React from "react";
import NxtIcon from "/public/images/skills/next.svg";
import react from "/public/images/skills/react.svg";
import native from "/public/images/skills/native.svg";
import drupal from "/public/images/skills/drupal.svg";
import twig from "/public/images/skills/twig.svg";
import node from "/public/images/skills/node.svg";
import css from "/public/images/skills/css.svg";
import html from "/public/images/skills/html.svg";
import js from "/public/images/skills/js.svg";
import { Box } from "@mui/material";
const MySkills = () => {
  const MySkills = [
    { title: "Next JS", icon: NxtIcon },
    { title: "react JS", icon: react },
    { title: "node JS", icon: node },
    { title: "Javascript", icon: js },
    { title: "drupal", icon: drupal },
    { title: "React native", icon: native },
    { title: "twig", icon: twig },
    { title: "css", icon: css },
    { title: "html", icon: html },
  ];
  return (
    <div className="p-10 max-w-[1100px] m-auto">
      <h2 className="text-[35px] font-bold text-center">My Skills</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {MySkills?.map((item, i) => (
          <Box
            key={i}
            className="bg-[#3d3e42]"
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              transition: 0.75,
              transition: "background 1s, color 1s",
              "&:hover": {
                backgroundColor: "#355e54",
                transition: "background 1s, color 1s",
              },
            }}
          >
            <Image width={100} height={100} src={item.icon} alt="" />
            <h5 className="text-center capitalize"> {item.title}</h5>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
