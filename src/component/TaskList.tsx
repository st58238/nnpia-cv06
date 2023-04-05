import {Task} from "../data/init-data";
import TaskCard from "./TaskCard";

interface Props {
    taskList: Array<Task>
}

const TaskList = ({taskList}: Props) => {

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

export default TaskList