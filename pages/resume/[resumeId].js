import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import FormSection from "../../components/Resume/FormSection";
import ResumePreview from "../../components/Resume/ResumePreview";
import UserContext from "../../lib/context/userContext";
import Navbar from "../../components/Navbar";
import Cookies from "js-cookie";
import ResumePreviewStyle2 from "../../components/Resume/ResumePreviewStyle2";
const ResumeId = () => {
  const router = useRouter();
  const { resumeId } = router.query;
  const [resumeStyle, setResumeStyle] = useState();
  useEffect(() => {
    setResumeStyle(Cookies.get("ResumeStyle"));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        {resumeStyle == "style1" ? <ResumePreview /> : <ResumePreviewStyle2 />}
      </div>
    </div>
  );
};

export default ResumeId;
