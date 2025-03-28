import Taskform from "@/frontend/components/taskManager/taskform";
import TaskManager from "@/frontend/components/taskManager/taskManager";

function TasksPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <Taskform />
      <TaskManager />
    </div>
  );
}

export default TasksPage;
