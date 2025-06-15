import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);

  const handleSave = (id, updatedTask) => {
    onUpdate({ ...updatedTask, id });
    setEditId(null);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={editId === task.id}
          onEdit={() => setEditId(task.id)}
          onCancel={() => setEditId(null)}
          onDelete={() => onDelete(task.id)}
          onSave={handleSave}
        />
      ))}
    </div>
  );
}

export default TaskList;
