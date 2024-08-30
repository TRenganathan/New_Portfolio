import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Email, LocationOn } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function PersonalDetailPreview({ resumeInfo }) {
  const [resumeStyle, setResumeStyle] = useState();
  useEffect(() => {
    setResumeStyle(Cookies.get("ResumeStyle"));
  }, []);
  const imgStyle2 = {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
  };
  return (
    <div>
      <div
        className="flex items-center  flex-wrap mb-4 gap-10"
        style={{
          justifyContent: resumeStyle == "style1" ? "between" : "start",
        }}
      >
        <Image
          alt="img"
          width={100}
          height={100}
          src={require("../../../public/images/hero.png")}
          style={resumeStyle == "style2" && imgStyle2}
        />
        <div>
          <h2
            className="font-bold text-2xl mb-1"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h2>
          <h2 className=" font-medium">{resumeInfo?.jobTitle}</h2>
        </div>
      </div>

      <div
        className="flex justify-between gap-4 mb-3 flex-wrap"
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
      </div>

      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
