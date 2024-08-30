import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ResumePreview from "../../components/Resume/ResumePreview";
import ReactToPrint from "react-to-print";
import Cookies from "js-cookie";
import ResumePreviewStyle2 from "../../components/Resume/ResumePreviewStyle2";
const ResumeId = () => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current;
    const originalContent = document.body.innerHTML;

    // Clone the print content and set it as the body's content
    document.body.innerHTML = printContent.innerHTML;

    // Trigger the print dialog
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContent;
    // window.location.reload(); // Reload the page to reset any changes
  };
  const [resumeStyle, setResumeStyle] = useState();
  useEffect(() => {
    setResumeStyle(Cookies.get("ResumeStyle"));
  }, []);
  return (
    <div className="pt-10">
      <div
        ref={printRef}
        className="flex items-center justify-center max-w-[1000px] m-auto"
      >
        {resumeStyle == "style1" ? <ResumePreview /> : <ResumePreviewStyle2 />}
      </div>

      <div className="m-auto w-max p-10">
        <ReactToPrint
          trigger={() => <button>Download Resume</button>}
          content={() => printRef.current}
        />
      </div>
    </div>
  );
};

export default ResumeId;
