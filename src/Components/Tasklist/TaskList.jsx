import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ loggedInUserData, setNewTask }) => {
  return (
    <div
      id="TaskList"
      className="w-full py-5 px-3 flex items-center justify-start gap-12 overflow-x-auto"
      role="list"
    >
      {/* Map through the list of tasks and render the appropriate component based on the task status */}
      {loggedInUserData.tasks.map((task, index) => {
        if (task.active) {
          // Render AcceptTask for active tasks
          return (
            <AcceptTask
              key={index}
              loggedInUserData={task}
              logData={loggedInUserData}
              setNewTask={setNewTask}
            />
          );
        } else if (task.completed) {
          // Render CompletedTask for completed tasks
          return (
            <CompletedTask
              key={index}
              loggedInUserData={task}
              logData={loggedInUserData}
              setNewTask={setNewTask}
            />
          );
        } else if (task.failed) {
          // Render FailedTask for failed tasks
          return (
            <FailedTask
              key={index}
              loggedInUserData={task}
              logData={loggedInUserData}
              setNewTask={setNewTask}
            />
          );
        } else if (task.newTask) {
          // Render NewTask for new tasks
          return (
            <NewTask
              key={index}
              loggedInUserData={task}
              logData={loggedInUserData}
              setNewTask={setNewTask}
            />
          );
        } else {
          // Default case when no task data matches the conditions
          return (
            <div key={index} className="text-red-500">
              NO DATA IS AVAILABLE
            </div>
          );
        }
      })}
    </div>
  );
};

export default TaskList;
