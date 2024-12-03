const Header = ({ loggedInUserData, handleLogout }) => {
  
  // Function to clear localStorage
  const clear = () => {
    localStorage.clear();
  };

  return (
    <div className="flex items-end justify-between">
      
      {/* Greeting message with the user's first name or "Admin" if no name exists */}
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {loggedInUserData?.firstName || "Admin"} 👋
        </span>
      </h1>

      {/* Button to clear localStorage */}
      <button 
        className="bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium" 
        onClick={clear}>
        Local Storage Clear
      </button>

      {/* Button to handle logout */}
      <button 
        className="bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium" 
        onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Header;
