import React, { useState } from 'react'

function CreateTask({onAdd}) {
    const [task, setTask] = useState({
        title:"",
        content:""
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setTask((prevTask) => {
            return {
                ...prevTask,
                [name]:value
            }
        })
    }
    const handleClick = (event) => {
        onAdd(task);
        setTask({
            title:"",
            content:""
        });
        event.preventDefault();
    }
  return (
    <div className='to-do-div'>
        <form className='to-do-form'>
            <input type="text"
            className='form-control to-do-text mb-3'
            name='title'
            value={task.title}
            onChange={handleChange}
            placeholder='Başlık'
             />
             <textarea name="content" 
             className='form-control to-do-text mb-3'
             value={task.content}
             onChange={handleChange}
             rows={3} 
             placeholder='İşinizi yazınız'
             ></textarea>
             <button className='btn btn-primary to-do-btn' onClick={handleClick}>Ekle+</button>
        </form>
    </div>
  )
}

export default CreateTask