import { GridView } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { apiKey, chatSession } from "../lib/AIGererator";

const AIGerereateButton = ({ open, setOpen }) => {
  const [userInput, setUserInput] = useState("");
  const handleClose = () => {
    setOpen(false);
    setUserInput("");
  };
  const gererateFromAI = async () => {
    const result = await chatSession.sendMessage(userInput);
    console.log(result.response.text());
  };

  return (
    <div>
      {/* <Button
        onClick={() => setOpen(true)}
        className="bg-purple text-[18px]"
        sx={{
          " & .MuiPaper-root": {
            width: "100%",
            minWidth: "85%",
            minHeight: "85%",
            backgroundColor: "#001017",
            borderRadius: "30px",
          },
        }}
      >
        <GridView />
        Gereate AI content
      </Button> */}
      <Dialog open={open} onClose={handleClose} sx={{ minWidth: "50%" }}>
        <DialogTitle id="alert-dialog-title" sx={{ padding: "30px" }}>
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent sx={{ minWidth: "500px", padding: "30px" }}>
          <input
            style={{
              width: "100%",
              padding: "10px 20px",
              border: "1px solid gray",
              borderRadius: "15px",
            }}
            type="text"
            placeholder="type annything"
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
            onClick={gererateFromAI}
          >
            Gereate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AIGerereateButton;
