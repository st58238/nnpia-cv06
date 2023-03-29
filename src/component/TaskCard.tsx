import {Task} from "../data/init-data";
import React from "react";

interface Props {
    task: Task

    onTaskDone: (task: Task) => void
}

const TaskCard = ({task, onTaskDone}: Props) => {

    const doneClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        task.done = e.target.checked
        onTaskDone(task)
        console.table(task)
    }

    return <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.creationDate.toISOString()}</p>
            <p>{task.updateDate?.toISOString()}</p>
            <br />
            <label>Splněno</label>
            <input type="checkbox" name="done" checked={task.done} onChange={doneClickHandle}/>
        </div>
}

export default TaskCard;