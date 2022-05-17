import ActivePrograms from "./modules/ActivePrograms";
interface DashboardProps extends UserList {
  activeUser: Array<UserList>;
}
function Dashboard({
  id,
  name,
  fullName,
  status,
  img,
  activeUser,
}: DashboardProps) {
  return (
    <main className="bg-[#F0EFF5] relative top-20 left-60 h-full p-12">
      <h1 className="text-[21px] text-[#333269] font-bold ">Hello, {name}!</h1>
      <ActivePrograms />
    </main>
  );
}

export default Dashboard;
