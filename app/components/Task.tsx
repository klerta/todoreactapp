
import {ITask} from "@/typess/tasks"
import React from 'react';


interface TaskProps {
    task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
        </tr>
    );
};

export default Task;
