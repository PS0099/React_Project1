import AllTask from "../../Others_components/AllTask";
import CreateTask from "../../Others_components/CreateTask";
import Header from "../../Others_components/Heder";

const AdminDashboard = ({ loggedInUserData, handleLogout }) => {
  return (
    <div className="w-full p-10 text-white bg-[#1c1c1c]">
      {/* Header component with logged-in user details and logout functionality */}
      <Header loggedInUserData={loggedInUserData} handleLogout={handleLogout} />
      
      {/* CreateTask component for creating new tasks */}
      <CreateTask />
      
      {/* AllTask component for displaying all tasks */}
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
