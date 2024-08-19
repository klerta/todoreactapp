import { deleteTodo } from "@/api";
import { ITask } from "@/typess/tasks";
import router from "next/navigation";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";


interface TaskProps {
    taskDelete: ITask;
    setModalOpen: (open: boolean) => boolean | void;
  }

export const DeleteTask: React.FC<TaskProps>= ({taskDelete, setModalOpen}) => {
      const router = useRouter();
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);


  const handleDeleteTask  = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

   return(

<div>
<h3 className='text-lg'>
            Are you sure, you want to delete this task?
          </h3>
          <div className='modal-action'>
          <button onClick={() => handleDeleteTask(taskDelete.id)} className="btn">
              Yes
            </button>
          </div>
</div>


   );

};