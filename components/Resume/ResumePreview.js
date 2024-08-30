import React, { useContext, useEffect, useState } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import SkillsPreview from "./preview/SkillsPreview";
import UserContext from "../../lib/context/userContext";
import EducationalPreview from "./preview/EducationalPreview";
import ProjectPreview from "./preview/ProjectPreview";
import { useDrag, useDrop } from "react-dnd";
import Cookies from "js-cookie";
const DraggableComponent = ({
  Component,
  index,
  moveComponent,
  resumeInfo,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "component",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "component",
    hover: (item) => {
      if (item.index !== index) {
        moveComponent(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      draggable
    >
      <Component resumeInfo={resumeInfo} />
    </div>
  );
};

const ResumePreview = () => {
  const { resumeInfo } = useContext(UserContext);
  const [componentsOrder, setComponentsOrder] = useState([
    PersonalDetailPreview,
    SummeryPreview,
    ExperiencePreview,
    EducationalPreview,
    SkillsPreview,
    ProjectPreview,
  ]);

  const moveComponent = (fromIndex, toIndex) => {
    setComponentsOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      const [movedComponent] = updatedOrder.splice(fromIndex, 1);
      updatedOrder.splice(toIndex, 0, movedComponent);
      return updatedOrder;
    });
  };
  const [resumeStyle, setResumeStyle] = useState();
  useEffect(() => {
    setResumeStyle(Cookies.get("ResumeStyle"));
  }, []);
  console.log(resumeStyle);
  return (
    <div
      className=" h-full p-14  cursor-move"
      style={{
        borderTop:
          resumeStyle == "style1" && `10px solid ${resumeInfo?.themeColor}`,
      }}
    >
      <div>
        {componentsOrder.map((Component, index) => (
          <DraggableComponent
            key={index}
            index={index}
            Component={Component}
            moveComponent={moveComponent}
            resumeInfo={resumeInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
