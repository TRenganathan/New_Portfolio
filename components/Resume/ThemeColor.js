import React, { useContext, useState } from "react";

import { Box, Popover, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import UserContext from "../../lib/context/userContext";

function ThemeColor() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#FF7133",
    "#71FF33",
    "#7133FF",
    "#FF3371",
    "#33FF71",
    "#3371FF",
    "#A1FF33",
    "#33A1FF",
    "#FF5733",
    "#5733FF",
    "#33FF5A",
    "#5A33FF",
    "#FF335A",
    "#335AFF",
  ];

  const { resumeInfo, setResumeInfo } = useContext(UserContext);
  const [selectedColor, setSelectedColor] = useState();
  const router = useRouter();
  const { resumeId } = router.query;
  const onColorSelect = (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color,
    });
    const data = {
      data: {
        themeColor: color,
      },
    };
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="flex gap-2"
        aria-describedby={id}
        onClick={handleClick}
      >
        {" "}
        <Grid /> Theme
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className="p-3">
          <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
          <div className="grid grid-cols-5 gap-3">
            {colors.map((item, index) => (
              <div
                key={index}
                onClick={() => onColorSelect(item)}
                className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor == item && "border border-black"}
             `}
                style={{
                  background: item,
                }}
              ></div>
            ))}
          </div>
        </Box>
      </Popover>
    </>
  );
}

export default ThemeColor;
