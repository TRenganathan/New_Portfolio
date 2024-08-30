import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../lib/context/userContext";
import { ArrowLeft, ArrowRight, Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import Summery from "./Form/Summery";
import Experience from "./Form/Experience";
import Education from "./Form/Education";
import Skills from "./Form/Skills";
import Link from "next/link";
import PersonalDetail from "./Form/PersonalDetail";
import { useRouter } from "next/router";
import ThemeColor from "./ThemeColor";
import ProjectForm from "./Form/ProjectForm";
function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(7);
  const [enableNext, setEnableNext] = useState(true);
  const router = useRouter();
  const { resumeId } = router.query;
  useEffect(() => {
    if (activeFormIndex >= 7) {
      setEnableNext(false);
    } else {
      setEnableNext(true);
    }
  }, [activeFormIndex]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link href={"/"}>
            <Button>
              <Home sx={{ color: "#fff", fontSize: "40px" }} />
            </Button>
          </Link>
          <ThemeColor />
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              {" "}
              <ArrowLeft />{" "}
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            {" "}
            Next
            <ArrowRight />{" "}
          </Button>
        </div>
      </div>
      {/* Personal Detail  */}
      {activeFormIndex == 1 ? (
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summery enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience />
      ) : activeFormIndex == 4 ? (
        <Education />
      ) : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <ProjectForm />
      ) : activeFormIndex == 7 ? (
        <Link
          href={"/my-resume/" + resumeId}
          className="px-6 py-3 rounded shadow-md w-max m-auto block mt-10 shadow-fuchsia-800 ANIMATED_BTN"
        >
          <span>Go to Resume</span>
        </Link>
      ) : null}

      {/* Experience  */}

      {/* Educational Detail  */}

      {/* Skills  */}
    </div>
  );
}

export default FormSection;
