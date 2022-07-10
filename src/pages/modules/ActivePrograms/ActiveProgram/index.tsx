import React from "react";

import "./activePrograms.css";

function ActiveProgram({
  title,
  university,
  universityImage,
  overdueAssignments,
  remainingAbsenses,
  academicAverage,
  completion,
}: ActivePrograms) {
  const valueVar: object = { "--value": completion } as React.CSSProperties;

  return (
    <li className="w-full my-3 p-1 flex">
      <img
        className="my-auto"
        width={68}
        height={68}
        src={universityImage}
        alt={title}
      />
      <div className="ml-4 flex flex-col space-y-3 w-9/12">
        <span className="bg-[#5855D6] p-2 uppercase text-[10px] text-white font-bold rounded-[35px] text-center">
          {title}
        </span>
        <span className="text-sm text-[#333269] font-bold">{university}</span>
      </div>
      <div className="flex justify-around w-full">
        <div className="activeprogram">
          <span className="big-letters">{overdueAssignments}</span>
          <span className="activeprogram--title">Overdue Assignments</span>
        </div>
        <div className="activeprogram">
          <span className="big-letters">{remainingAbsenses}</span>
          <span className="activeprogram--title">Remaining Absenses</span>
        </div>
        <div className="activeprogram">
          <span className="big-letters">
            {academicAverage ? academicAverage : "--"}
          </span>
          <span className="activeprogram--title">Academic Average</span>
        </div>
        <div className="activeprogram overflow-hidden">
          <div
            className="progressbar"
            aria-valuenow={completion}
            aria-valuemin={0}
            aria-valuemax={100}
            style={valueVar}
          ></div>
          <span className="activeprogram--title">Completion</span>
        </div>
      </div>
    </li>
  );
}

export default ActiveProgram;
