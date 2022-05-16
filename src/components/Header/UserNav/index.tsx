import React from "react";

function UserNav({ id, name, fullName, status, img }: UserList) {
  return (
    <div className="flex w-10 justify-around ml-20">
      <img
        className="flex-1 rounded-full"
        src="/img/icons/ion_messages-circle.svg"
        alt="Messages"
        width={38}
        height={38}
      />
      <img
        className="flex-1 rounded-full"
        src="/img/icons/ion_notifications-circle.svg"
        alt="Notifications"
        width={38}
        height={38}
      />
      <div className="ml-6 flex text-[#0A043C]">
        <img className="aspect-square" src={img} alt={fullName} width={40} height={40} />
        <div className="flex flex-col ml-2">
          <p className="font-bold">{name}</p>
          <p className="text-sm">{status}</p>
        </div>

        <img
          className="ml-6"
          src="/img/icons/bubble.svg"
          alt=""
          width={3}
          height={15}
        />
      </div>
    </div>
  );
}

export default UserNav;
