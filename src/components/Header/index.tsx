import UserNav from "./UserNav";

interface HeaderProps extends UserList {
	activeUser: Array<UserList>;
}

function Header({ activeUser }: HeaderProps): JSX.Element {
  return (
    <header className="w-full h-20 fixed left-60 top-0 bg-white py-5 px-10">
      <div className="flex">
        <img
          className="flex-initial"
          src="/img/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <input
          className="text-sm ml-4 my-2 w-[700px] flex-initial"
          type="text"
          placeholder="Search course, student or instructor"
        />
        <div className="bg-slate-900/20 h-10 w-px flex-initial"></div>
        {activeUser.map((e: UserList) => (
          <UserNav
            key={e.id}
            id={e.id}
            name={e.name}
            fullName={e.fullName}
            status={e.status}
            img={e.img}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
