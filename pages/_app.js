import { useState } from "react";
import UserContext from "../lib/context/userContext";
import "../styles/globals.css";
import { dummyData } from "../data/dummy";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }) {
  const [resumeInfo, setResumeInfo] = useState(dummyData);

  return (
    <DndProvider backend={HTML5Backend}>
      <UserContext.Provider value={{ resumeInfo, setResumeInfo }}>
        <Component {...pageProps} />;
      </UserContext.Provider>
    </DndProvider>
  );
}
