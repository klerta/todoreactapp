'use client'
import {ITask} from "@/typess/tasks"
import { Red_Rose } from "next/font/google";
import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler } from "react";
import { useRouter } from "next/navigation";

import { deleteTodo, editTodo } from "@/api";
import { EditTask } from "./EditTask";

interface TaskProps {
    task: ITask;
  }
  
  const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await editTodo({
        id: task.id,
        text: taskToEdit,
      });
      setOpenModalEdit(false);
      router.refresh();
    };
  
    const handleDeleteTask = async (id: string) => {
      await deleteTodo(id);
      setOpenModalDeleted(false);
      router.refresh();
    };
  
    return (
      <tr key={task.id}>
        <td className='w-full'>{task.text}</td>
        <td className='flex gap-5'>
          <FiEdit
            onClick={() => setOpenModalEdit(true)}
            cursor='pointer'
            className='text-blue-500'
            size={25}
          />
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <EditTask taskEdit={task} setModalOpen={setOpenModalEdit}  />
          </Modal>
          <FiTrash2
            onClick={() => setOpenModalDeleted(true)}
            cursor='pointer'
            className='text-red-500'
            size={25}
          />
          <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
            <h3 className='text-lg'>
              Are you sure, you want to delete this task?
            </h3>
            <div className='modal-action'>
              <button onClick={() => handleDeleteTask(task.id)} className='btn'>
                Yes
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    );
  };
  
  export default Task;