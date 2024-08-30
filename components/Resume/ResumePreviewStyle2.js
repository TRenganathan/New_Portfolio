import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Email, LocationOn } from "@mui/icons-material";
import UserContext from "../../lib/context/userContext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import backgroundImage from "../../public/images/hero.png";
function ResumePreviewStyle2({}) {
  const { resumeInfo } = useContext(UserContext);
  const [resumeStyle, setResumeStyle] = useState();
  useEffect(() => {
    setResumeStyle(Cookies.get("ResumeStyle"));
  }, []);
  const imgStyle2 = {
    borderRadius: "50%",
    width: "155px",
    height: "155px",
    borderColor: resumeInfo?.themeColor,
    borderWidth: 1,
    padding: "2px",
  };
  return (
    <div className="pt-5">
      <Grid
        container
        className="flex items-center  flex-wrap mb-3"
        style={{
          justifyContent: resumeStyle == "style1" ? "between" : "start",
        }}
      >
        <Grid
          item
          md={4}
          xs={12}
          style={{ flexDirection: resumeStyle == "style2" && "column" }}
        >
          <div
            style={{
              ...imgStyle2,
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          >
            VIJAY
          </div>
          {/* <Image
            alt="img"
            width={100}
            height={100}
            src={require("../../public/images/hero.png")}
            style={resumeStyle == "style2" && imgStyle2}
          /> */}
        </Grid>

        <Grid item md={8} xs={12}>
          <h2
            className="font-bold"
            style={{
              color: resumeInfo?.themeColor,
              fontSize: resumeStyle == "style1" ? "20px" : "30px",
              textAlign: resumeStyle == "style1" ? "center" : "left",
            }}
          >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h2>
          <h2
            className=" font-medium"
            style={{
              fontSize: resumeStyle == "style1" ? "14px" : "18px",
              textAlign: resumeStyle == "style1" ? "center" : "left",
            }}
          >
            {resumeInfo?.jobTitle}
          </h2>
        </Grid>
      </Grid>

      <Grid container>
        {/* contact */}
        <Grid
          id="contact"
          item
          md={4}
          xs={12}
          className="flex gap-6 min-w-max pt-4 "
          style={{ flexDirection: resumeStyle == "style2" && "column" }}
        >
          <h2
            className="font-normal text-[15px]"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            <PhoneInTalkIcon className="mr-3" />
            {resumeInfo?.phone}
          </h2>
          <h2
            className="font-normal text-[15px]"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            <LocationOn className="mr-3" />
            {resumeInfo?.address}
          </h2>
          <h2
            className="font-normal text-[15px]"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            <Email className="mr-3" />
            {resumeInfo?.email}
          </h2>
          <h2
            className="font-normal text-[15px]"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            <a href={resumeInfo?.linkedIn} title="linkedIn" target="_blank">
              <LinkedInIcon className="mr-3" />
              LinkedIn
            </a>
            {}
          </h2>
        </Grid>
        {/* about me */}
        <Grid item md={8} xs={12} className="pt-4">
          <div id="about">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-[15px">{resumeInfo?.summery}</p>
          </div>
        </Grid>
        {/* Education */}
        <Grid item md={4} xs={12} className="pt-4">
          <div id="education">
            <h2 className="text-2xl font-semibold mb-2 border-b-6  border-dashed  ">
              Education
            </h2>

            {resumeInfo?.education.map((education, index) => (
              <div key={index} className="mb-4">
                <h2
                  className="text-[20px] font-bold"
                  style={{
                    color: resumeInfo?.themeColor,
                  }}
                >
                  {education?.degree} in {education?.major}
                </h2>
                <h2 className="text-[17px] font-semibold pb-1">
                  {education.universityName}
                </h2>
                <h4 className="text-[15px] font-semibold">
                  {education?.startDate} - {education?.endDate}
                </h4>
              </div>
            ))}
          </div>
          <div id="skills">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-3 my-2">
              {resumeInfo?.skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <h2 className="text-[15px">{skill.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        {/* Experience */}
        <Grid item md={8} xs={12} className="pt-4">
          <div id="experience">
            <h2 className="text-2xl font-semibold mb-2">Work Experience </h2>
            {resumeInfo?.experience?.map((experience, index) => (
              <div key={index} className="my-2">
                <h2
                  className="text-[18px] font-bold"
                  style={{
                    color: resumeInfo?.themeColor,
                  }}
                >
                  {experience?.title}
                </h2>
                <h2 className="text-[17px] font-semibold flex justify-between">
                  {experience?.companyName},{experience?.city},
                  {experience?.state}
                  <span>
                    {experience?.startDate} To{" "}
                    {experience?.currentlyWorking
                      ? "Present"
                      : experience.endDate}{" "}
                  </span>
                </h2>
                <p className="text-[15px] my-2">{experience.workSummery}</p>
              </div>
            ))}
          </div>
        </Grid>
        {/* Projects */}
        <Grid item xs={12}>
          <div id="projects">
            <h2 className="text-2xl font-semibold mb-2 pt-5">Projects</h2>
            <div className=" my-2">
              {resumeInfo?.projects.map((project, index) => (
                <div key={index} className="pb-3">
                  <div
                    className="text-[18px] font-bold"
                    style={{
                      color: resumeInfo?.themeColor,
                    }}
                  >
                    {" "}
                    {project.projectTitle}
                  </div>
                  <p className="text-[17px] font-semibold">
                    {project?.projectRole}
                  </p>
                  <p className="pb-4"> {project.projectDescription}</p>
                  <div className="flex gap-3 flex-wrap items-center">
                    {project?.technologies?.length &&
                      project?.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            paddingRight: "10px",
                            border: `1px solid ${resumeInfo?.themeColor}`,
                            padding: "2px 8px",
                            borderRadius: "10px",
                          }}
                        >
                          {tech?.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResumePreviewStyle2;
