import React, { useContext, useEffect, useState } from "react";

import UserContext from "../../../lib/context/userContext";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);
  const router = useRouter();
  const { resumeId } = router.query;

  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(UserContext);

  useEffect(() => {
    resumeInfo && setSkillsList(resumeInfo?.skills);
  }, []);

  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();

    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };
  console.log(resumeInfo);
  const AddNewSkills = () => {
    setSkillsList([
      ...skillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };
  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = () => {
    const data = {
      data: {
        skills: skillsList.map(({ id, ...rest }) => rest),
      },
    };
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div
            className="flex justify-between mb-2 border rounded-lg p-3 "
            key={index}
          >
            <div>
              <label className="text-xs">Name</label>
              <input
                className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
                defaultValue={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              type="number"
              min={0}
              max={100}
              defaultValue={item?.rating}
              placeholder="Rating"
              onChange={(v) => handleChange(index, "rating", v.target.value)}
            />
            <Rating
              style={{ maxWidth: 120 }}
              value={item?.rating}
              onChange={(v) => handleChange(index, "rating", v)}
              defaultValue={item?.rating}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            {" "}
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="text-primary"
          >
            {" "}
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? "Loading" : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
