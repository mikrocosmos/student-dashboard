function Card({ title, theme, checkedIn, img, day, month, state }: Card) {
  return (
    <div className="w-80 h-72 p-4 bg-white rounded-[20px] relative">
      <img className="w-72 h-64" src={img} alt="" width={298} height={270} />
      {checkedIn && (
        <div className="bg-[#5855D6] w-14 h-12 py-2.5 absolute top-4 right-7 rounded-b-xl text-center leading-4">
          <img
            className="inline"
            src="/img/icons/checked-in.svg"
            alt="Checked In"
          />
          <p className="text-[8px] text-white">Checked In</p>
        </div>
      )}
      <div className="w-72 h-28 bg-white rounded-xl p-4 relative bottom-12 [box-shadow:0px_14px_20px_rgba(0,0,0,0.1)]">
        <h3 className="font-medium text-[#0E1566] text-xl">{title}</h3>
        <p className="uppercase text-[#9592A6] text-[11px]">{theme}</p>
        <div className="w-7 h-8 absolute right-4 top-3 uppercase font-bold text-center text-[#9592A6] leading-none">
          <p className="text-lg">{day}</p>
          <p className="text-[10px]">{month}</p>
        </div>
        {state === "In progress" ? (
          <div className="flex mt-4">
            <img
              className="relative bottom-0.5 right-1"
              src="/img/icons/in-progress.svg"
              alt={state}
            />
            <span className="text-[#FF2C55] italic text-sm">{state}</span>
          </div>
        ) : (
          <div className="flex mt-4">
            <span className="text-green-300 italic text-sm">Done</span>
          </div>
        )}
        <button className="font-bold text-sm text-[#5855D6] absolute right-4 bottom-5 transition hover:text-indigo-800 hover:underline">
          Join now
        </button>
      </div>
    </div>
  );
}

export default Card;
