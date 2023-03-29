import TaskCard from '../component/TaskCard'
import {Task, tasks} from "../data/init-data";
import {useState} from "react";

const Tasks = () => {
  const [taskList, setTaskList] = useState<Array<Task>>(tasks)

  const taskDoneHandle = (task: Task) => {
    console.log("Change")
    setTaskList([...taskList])
  }

  return <div>
    <h1>Aktuální tasky</h1>
      {taskList.filter(t => !t.done).map(t =>
          <TaskCard task={t} key={t.id} onTaskDone={taskDoneHandle} />
      )}
    <h1>Splněné tasky</h1>
    {taskList.filter(t => t.done).map(t =>
        <TaskCard task={t} key={t.id} onTaskDone={taskDoneHandle} />
    )}
  </div>
}

export default Tasks