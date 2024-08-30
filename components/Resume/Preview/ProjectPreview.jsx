import React from "react";

function ProjectPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Projects
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      <div className=" my-4">
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
            <p className="text-[17px] font-semibold">{project?.projectRole}</p>
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
  );
}

export default ProjectPreview;
