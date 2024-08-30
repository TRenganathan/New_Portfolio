import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
function Navbar() {
  return (
    <header style={{ width: "100%" }} className="mt-10 m-auto max-w-[1100px]">
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <ul style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <li className="text-[#78797c] font-medium ">About</li>
          <li className="text-[#78797c] font-medium ">Portfolio</li>
          <li className="text-[#78797c] font-medium ">Contact</li>
          <li className="text-[#78797c] font-medium ">
            <Link href={"/resume"}>Resume</Link>
          </li>
        </ul>
        <div className="bg-[#3d3e42]" style={{ padding: 8, borderRadius: 10 }}>
          <input
            placeholder="search"
            style={{
              backgroundColor: "transparent",
            }}
          />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
