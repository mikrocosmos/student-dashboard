import React from "react";

interface MessagesProps extends UserList {
  activeUser: Array<UserList>;
}

function Messages({ name, id, img, activeUser }: MessagesProps) {
  return (
    <div className="fixed right-4 bottom-0 w-80">
      <div className="rounded-t-3xl shadow p-4 flex items-center bg-[#FAFAFF]">
				<img width={30} height={30} rounded-full src={img} alt={name} /> 
				<h3 className="font-medium text-[#333269] ml-3">Messages</h3>
				
			</div>
    </div>
  );
}

export default Messages;
