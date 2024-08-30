import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AddResume from "../../components/AddResume";

const Resume = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="px-24">
        <h2 className="text-3xl">My Resume</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          <AddResume open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default Resume;
