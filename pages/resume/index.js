import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AddResume from "../../components/Resume/AddResume";
import Image from "next/image";
import Link from "next/link";
import AddResumeStyle2 from "../../components/Resume/AddResumeStyle2";

const Resume = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="px-24">
        <h2 className="text-3xl">My Resume</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          <Link
            href={"/ssssx.pdf"}
            className="p-14 py-24 border max-w-[250px] items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover: shadow-md"
          >
            <Image src={require("../../public/resumeImg.png")} />
          </Link>
          <AddResume open={open} setOpen={setOpen} />
          <AddResumeStyle2 open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default Resume;
