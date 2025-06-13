// components/TaskItem.jsx
import React, { useState } from 'react';

function TaskItem({ task, isEditing, onEdit, onCancel, onDelete, onSave }) {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    onSave(task.id, {
      title: editedTitle,
      description: editedDescription,
    });
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={onEdit}>Edit</button>
          <button className="delete" onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
