import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = () => {
    const [addTask, setAddTask] = useState("")
    const [displayTask, setDisplayTask] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [editTask, setEditTask] = useState(null)


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('datakey'))
        if (data) {
            setDisplayTask(data)
        }
    }, [])


    useEffect(() => {
        if (displayTask?.length) {
            localStorage.setItem('datakey', JSON.stringify(displayTask))
        }
    }, [displayTask])

    const handleClick = () => {

        if (editTask) {
            const updateTask = displayTask.map(task => task.id === editTask.id ? { ...task, task: addTask } : task)

            setDisplayTask(updateTask)
            setEditTask(null)
        }
        else {
            const newTask = {
                id: Date.now(),
                task: addTask
            }

            setDisplayTask([...displayTask, newTask])
        }

        setAddTask("")
        setIsOpen(false)
    }

    const handleEdit = (id) => {
        const taskToEdit = displayTask.find(task => task.id === id);

        if (taskToEdit) {
            setAddTask(taskToEdit.task)
            setEditTask(taskToEdit)
            setIsOpen(true)
        }
    }

    const handleDelete = (id) => {
        const updatedTask = displayTask.filter(task => task.id !== id)
        setDisplayTask(updatedTask)
    }

    return (
        <>
            <div className='flex items-center justify-center mt-10'>
                <input
                    type="text"
                    value={addTask}
                    placeholder='Add Task'
                    onChange={(e) => setAddTask(e.target.value)}
                    className='p-5 border border-black'
                />
                <button
                    className='ml-10 py-4 px-8 border border-black'
                    onClick={handleClick}
                >
                    Add Task
                </button>
            </div>

            <div className='mt-10 mx-10'>
                {displayTask.map((task, index) => (
                    <div key={index} className='flex items-center justify-between border p-2 my-2'>
                        <p className='text-black'>{task.task}</p>
                        <FaRegEdit className='cursor-pointer' onClick={() => handleEdit(task.id)} />
                        <MdDelete className='cursor-pointer' onClick={() => handleDelete(task.id)} />
                    </div>
                ))}
            </div>

            {
                isOpen && (
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center'>
                        <div className='bg-white relative shadow-md w-[20rem] py-[2rem] px-[1rem] flex items-center justify-center'>
                            <input
                                type="text"
                                value={addTask}
                                onChange={(e) => setAddTask(e.target.value)}
                                className='py-[0.6rem] px-[1rem] border border-black'
                            />
                            <button className='py-[0.6rem] px-[1rem] border border-black ml-3' onClick={handleClick}>
                                save
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Task
