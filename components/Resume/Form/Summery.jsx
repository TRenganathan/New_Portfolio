import React, { useContext, useEffect, useState } from "react";
// import { AIChatSession } from "./../../../../../service/AIModal";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import UserContext from "../../../lib/context/userContext";
import { chatSession } from "../../../lib/AIGererator";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";
function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { resumeId } = router.query;
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState();
  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);

    const result = await chatSession.sendMessage(PROMPT);
    console.log(result.response.text(), "Summery");

    setAiGenerateSummeryList(JSON.parse(result.response.text()));
    setLoading(false);
  };

  const onSave = (e) => {
    e.preventDefault();

    setLoading(true);
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button
              variant="outline"
              onClick={() => GenerateSummeryFromAI()}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              Generate from AI
            </Button>
          </div>
          <textarea
            className="mt-5 w-full border-x-white-200 h-20 bg-transparent"
            required
            value={summery}
            defaultValue={summery ? summery : resumeInfo?.summery}
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Loading" : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList && (
        <div className="my-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummeryList?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummery(item?.summary)}
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
            >
              <h2 className="font-bold my-1 text-primary">
                Level: {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summery;
