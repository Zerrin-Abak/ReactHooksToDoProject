import React from 'react'

function Task({id, title, content, onDelete}) {
    const handleClick = () => {
        onDelete(id);
    }
  return (
    <div className='col-md-4 mb-4'>
        <div className='content-div'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button className='btn btn-danger to-do-btn' onClick={handleClick}>Sil</button>
        </div>
    </div>
  )
}

export default Task