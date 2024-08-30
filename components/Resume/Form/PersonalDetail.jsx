import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../lib/context/userContext";
import { useParams } from "next/navigation";
import { Button, TextField } from "@mui/material";
import Image from "next/image";

function PersonalDetail({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);

  const [formDatas, setFormDatas] = useState();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const handleInputChange = (e) => {
    setFile(e.target.files[0]);

    setFormDatas({
      ...formDatas,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      }); // Call the action function
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-[22px]">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div>
            <label className="text-sm">Job Title</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Address</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">linkedIn</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="linkedIn"
              required
              defaultValue={resumeInfo?.linkedIn}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Profile Picture</label>
            <input
              className="border-white-700 border-2 outline-none bg-transparent px-2 py-1 ml-4 rounded"
              name="profileImage"
              type="file"
              onChange={handleFileChange}
              id="profilePhoto"
              accept="image/*"
            />
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? "Loading" : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
