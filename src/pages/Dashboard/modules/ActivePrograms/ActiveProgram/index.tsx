function ActiveProgram({
  title,
  university,
  universityImage,
  overdueAssignments,
  remainingAbsenses,
  academicAverage,
  completion,
}: ActivePrograms) {
  return (
    <li className="w-full my-3 p-1 flex">
      <img
        className="my-1"
        width={68}
        height={68}
        src={universityImage}
        alt={title}
      />
      <div className="ml-4 flex flex-col space-y-3">
        <span className="bg-[#5855D6] p-2 uppercase text-[10px] text-white font-bold rounded-[35px] text-center">
          {title}
        </span>
        <span className="text-sm text-[#333269] font-bold">{university}</span>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center align-center text-center text-[#9592A6]">
          <span className="font-Museo text-4xl">{overdueAssignments}</span>
          <span className="text-[10px]">Overdue Assignments</span>
        </div>
        <div className="flex flex-col justify-center align-center text-center text-[#9592A6]">
          <span className="font-Museo text-4xl">{remainingAbsenses}</span>
          <span className="text-[10px]">Remaining Absenses</span>
        </div>
        <div className="flex flex-col justify-center align-center text-center text-[#9592A6]">
          <span className="font-Museo text-4xl">
            {academicAverage ? academicAverage : "--"}
          </span>
          <span className="text-[10px]">Academic Average</span>
        </div>
        <div className="flex flex-col justify-center align-center text-center text-[#9592A6] overflow-hidden">
          <progress className="" max={100} value={completion}></progress>
          <span className="font-Museo text-sm">{completion}%</span>
          <span className="text-[10px]">Completion</span>
        </div>
      </div>
    </li>
  );
}

export default ActiveProgram;
