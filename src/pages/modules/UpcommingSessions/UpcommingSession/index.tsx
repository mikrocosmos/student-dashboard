import React from "react";

function UpcommingSession({ day, month, title, theme, time }: Session) {
  return (
    <li className="grid grid-cols-6 gap-x-5 mt-3 border-b border-neutral-200 border-solid last:border-none">
      <div className="w-7 mt-2.5 uppercase font-bold text-center text-[#9592A6] leading-none col-start-1 col-end-2">
        <p className="text-lg">{day}</p>
        <p className="text-[10px]">{month}</p>
      </div>
      <div className="py-3 col-start-2 col-end-8">
        <div className="flex justify-between p-2 transition hover:bg-[#FAFAFF] hover:rounded-[10px] hover:shadow">
          <div className="flex-col">
            <p className="text-xs text-[#021442] font-medium">{title}</p>
            <p className="text-[11px] text-[#9592A6]">{theme}</p>
          </div>
          <span className="text-[#021442] text-[9px] font-bold text-center p-2 bg-[#E7E7FF] h-6  rounded-xl">
            {time}
          </span>
        </div>
      </div>
    </li>
  );
}

export default UpcommingSession;
