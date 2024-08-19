
import { editTodo } from "@/api";
import { ITask } from "@/typess/tasks";
import  { useRouter } from "next/navigation";
import React ,{ FormEventHandler, useState } from "react";

interface TaskProps {
    taskEdit: ITask;
    setModalOpen: (open: boolean) => boolean | void;
  }
export const EditTask: React.FC<TaskProps> = ({taskEdit, setModalOpen}) => {
    const router = useRouter();
    const [taskToEdit, setTaskToEdit] = useState<string>(taskEdit.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
          id: taskEdit.id,
          text: taskToEdit,
        });
        setModalOpen(false);
        router.refresh();
      };
    return (
      <form onSubmit={handleSubmitEditTodo}>
      <h3 className='font-bold text-lg'>Edit task</h3>
      <div className='modal-action'>
        <input
          value={taskToEdit}
          onChange={(e) => setTaskToEdit(e.target.value)}
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </div>
    </form>
    )
}