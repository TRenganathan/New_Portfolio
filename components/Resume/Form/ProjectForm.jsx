import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../lib/context/userContext";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const ProjectForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    resumeInfo?.projects.length && setProjectList(resumeInfo.projects);
  }, []);
  const handleChange = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    const newEntries = projectList?.slice();
    newEntries[index][name] = value;
    let newTech = [...projectList];
    if (name === "technologies") {
      // Get the list of selected technology IDs
      const selectedTechnologies = value.map((tech) => tech.id);
      // Filter ProjectTechnologies to get the selected technology objects
      const updatedTechnologies = ProjectTechnologies.filter((tech) =>
        selectedTechnologies.includes(tech.id)
      );
      // Update the technologies field in the current project
      const duplicates = selectedTechnologies.reduce((acc, id, index, arr) => {
        if (arr.indexOf(id) !== index && !acc.includes(id)) acc.push(id);
        return acc;
      }, []);

      // Step 2: Filter out the duplicates from updatedTechnologies
      const newUpdatedTechnology = updatedTechnologies.filter(
        (tech) => !duplicates.includes(tech.id)
      );

      console.log(
        duplicates,
        "duplicates",
        "selectedTechnologies:",
        selectedTechnologies,
        "newUpdatedTechnology:",
        newUpdatedTechnology
      );
      newEntries[index][name] = newUpdatedTechnology;
    } else {
      newEntries[index][name] = value;
    }

    setProjectList(newEntries);

    // setProjectList(newEntries);
  };
  const addNewProject = () => {
    setProjectList([
      ...projectList,
      {
        projectTitle: "",
        projectRole: "",
        projectDescription: "",
        technologies: "",
      },
    ]);
  };
  const removeProject = () => {
    setProjectList((projectList) => projectList.slice(0, -1));
  };
  useEffect(() => {
    setResumeInfo({ ...resumeInfo, projects: projectList });
  }, [projectList]);

  const ProjectTechnologies = [
    { id: 1, name: "React JS " },
    { id: 2, name: "Node JS 2" },
    { id: 3, name: "Next JS " },
    { id: 4, name: "React Native" },
    { id: 5, name: "Express JS " },
    { id: 6, name: "Python" },
    { id: 7, name: "Java" },
    { id: 8, name: "SQL" },
    { id: 9, name: "jQuery" },
    { id: 10, name: "HTML && CSS" },
    { id: 12, name: "Typescript" },
    { id: 13, name: "Javascript" },
    { id: 14, name: "PostgreSQL" },
    { id: 15, name: "Rubi" },
    { id: 16, name: "C" },
    { id: 17, name: "C++" },
  ];
  const handleSave = () => {};
  const HandleDownload = () => {
    window.print();
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Project</h2>
      <p className="pb-4">Add Your Project details</p>
      <div>
        <form onSubmit={handleSave}>
          {projectList?.map((item, index) => (
            <div
              key={index}
              className="pb-5 border-white-200 border-2 p-10 mb-4 rounded"
            >
              <div>
                <label>Project Title</label>
                <input
                  className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 block mb-4 mt-2 rounded"
                  type="text"
                  name="projectTitle"
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.projectTitle}
                />
              </div>
              <div>
                <label>Project Role</label>
                <input
                  className=" border-white-700 border-2 outline-none bg-transparent px-2 py-1 block mb-4 mt-2 rounded"
                  type="text"
                  name="projectRole"
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.projectRole}
                />
              </div>
              <div>
                <label>Project Description</label>
                <input
                  className="w-full border-white-700 border-2 outline-none bg-transparent px-2 py-1 block mb-4 mt-2 rounded"
                  type="text"
                  name="projectDescription"
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.projectDescription}
                />
              </div>

              <Select
                multiple
                value={item.technologies || []}
                name="technologies"
                onChange={(e) => handleChange(e, index)}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((item) => (
                      <Chip
                        sx={{ color: "#fff" }}
                        key={item.id}
                        label={
                          ProjectTechnologies.find((e) => e.id == item?.id)
                            ?.name
                        }
                      />
                    ))}
                  </Box>
                )}
              >
                {ProjectTechnologies?.map((tech) => {
                  const valueOption =
                    item?.technologies.length &&
                    item?.technologies?.map((eachValue) => eachValue?.name);
                  const isChecked =
                    valueOption && valueOption?.includes(tech?.name);
                  return (
                    <MenuItem key={tech?.id} value={tech}>
                      <Checkbox checked={isChecked} />
                      <ListItemText primary={tech?.name} />
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          ))}
        </form>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={addNewProject}
              className="text-primary"
            >
              {" "}
              + Add More Education
            </Button>
            <Button
              variant="outline"
              onClick={removeProject}
              className="text-primary"
            >
              {" "}
              - Remove
            </Button>
          </div>
          <Button onClick={() => HandleDownload()}>{"Save"}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
