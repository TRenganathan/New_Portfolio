import React from "react";
import Star from "@mui/icons-material/Star";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
const RatingComp = ({ number, themeColor }) => {
  const newArray = Array.from({ length: number }, (_, i) => i);

  return (
    <>
      {newArray.map((_, index) => (
        <StarBorderPurple500RoundedIcon
          key={index} // Always provide a key when rendering lists
          style={{
            color: themeColor ? themeColor : "#ff6666",
            fontSize: "18px",
          }}
        />
      ))}
    </>
  );
};
function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-md">{skill.name}</h2>
            {/* <Rating
              style={{ maxWidth: 120 }}
              value={skill?.rating}
              disabled={true}
            /> */}
            <div>
              <RatingComp
                number={skill?.rating}
                themeColor={resumeInfo?.themeColor}
              />
            </div>
            {/* <div className="h-[20px] bg-balck-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating > 100 ? "100%" : skill?.rating + "%",
                }}
              ></div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
