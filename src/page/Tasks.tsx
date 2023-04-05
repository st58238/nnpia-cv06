import {Task, tasks} from "../data/init-data";
import TaskList from "../component/TaskList";
import {useEffect, useState} from "react";

const Tasks = () => {
    const [taskList, setTaskList] = useState<Array<Task>>(tasks)
    useEffect(() => {
        fetchData()
    }, [])

  const fetchData = async () => {
        const baseURL = import.meta.env.VITE_BACKEND_URL
    const result = await fetch(`${baseURL}/tasks`)
      const data = await result.json() as Array<Task>

      const newData = data.map(e => {
          const { creationDate, updateDate, ...rest } = e
          return {
              creationDate: new Date(creationDate),
              updateDate: new Date(updateDate),
              ...rest
          }
      })
    setTaskList(newData)
  }
  return <TaskList taskList={taskList} />
}

export default Tasks