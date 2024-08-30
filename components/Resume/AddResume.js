import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import resumeImg from "../../public/resumeImg.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
const AddResume = () => {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setUserInput("");
  };
  const createNewResume = () => {
    router.push(`/resume/${userInput}`);
    handleClose();
  };
  const handleOpen = () => {
    Cookies.set("ResumeStyle", "style1");
    setOpen(true);
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        className="p-14 py-24 border max-w-[250px] items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover: shadow-md"
        style={{
          backgroundImage: `url(/resumeImg.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-16 h-16 rounded-full flex items-center bg-purple justify-center relative">
          <Add style={{ color: "#fff" }} />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} sx={{ minWidth: "50%" }}>
        <DialogTitle id="alert-dialog-title" sx={{ padding: "30px" }}>
          {" Create a New Resume  "}
        </DialogTitle>
        <DialogContent sx={{ minWidth: "500px", padding: "30px" }}>
          <label>Add a title for the resume </label>
          <input
            style={{
              width: "100%",
              padding: "10px 20px",
              border: "1px solid gray",
              borderRadius: "15px",
            }}
            type="text"
            placeholder="Ex: front end developer"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="ghost" onClick={handleClose}>
            cancel
          </Button>
          <Button
            disabled={!userInput}
            className="bg-blue-600 text-[#fff]"
            onClick={createNewResume}
          >
            Gereate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddResume;
