import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
function SummeryPreview({ resumeInfo }) {
  const [resumeStyle, setResumeStyle] = useState();
  useEffect(() => {
    setResumeStyle(Cookies.get("ResumeStyle"));
  }, []);
  return (
    <>
      {resumeStyle == "style1" && (
        <p className="text-md">{resumeInfo?.summery}</p>
      )}
    </>
  );
}

export default SummeryPreview;
