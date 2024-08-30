"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./MovingBorders";
import { FmdGood, LocalActivity, WorkHistory } from "@mui/icons-material";
import MagicButton from "./MagicButton";
import { useRouter } from "next/router";
const Experience = () => {
  const router = useRouter();
  const workExperience = [
    {
      role: "Frontend Engineer",
      company: "Young Globes",
      location: "coimbatore",
      duration: "Nov-2021 to June-2023",
      description:
        "Assisted in the development of a web-based platform using Drupal and PHP, enhancing interactivity.",
    },
    {
      role: "MERN Stack Developer ",
      company: "Iprotecs solution",
      location: "coimbatore",
      duration: "Aug-2023 to Present",
      description:
        "Developed and maintained user-facing features using modern web technologies using Next js and Node JS.",
    },
  ];
  return (
    <div className="py-20 w-full relative bg-[#25262c96]" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-24">
        {workExperience?.map((card, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={
                  index == 1
                    ? "/images/skills/exp1.svg"
                    : "/images/skills/exp4.svg"
                }
                // alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card?.role + "-" + card?.company}
                </h1>
                <div className="flex justify-between gap-2 flex-wrap mt-[1rem] ">
                  <div className="flex gap-3 items-center text-purple">
                    <FmdGood />
                    <span> {card.location ? card.location : "Coimbatore"}</span>
                  </div>
                  <div className="flex gap-3 items-center text-purple">
                    <WorkHistory />
                    <span>{card.duration ? card.duration : "-"}</span>
                  </div>
                </div>
                <p className="text-start text-white-100 mt-3 font-semibold line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href={`/`}>
          <MagicButton
            title="Read More"
            icon={<WorkHistory />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default Experience;
