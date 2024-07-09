import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskModal from "./TaskModal"; // Assuming you have a TaskModal component for task details

const KanbanBoard = () => {
  // Mock data for demonstration
  const initialTasks = {
    todo: [
      { id: "task-1", title: "Task 1", description: "Description for Task 1" },
      { id: "task-2", title: "Task 2", description: "Description for Task 2" },
    ],
    inProgress: [
      { id: "task-3", title: "Task 3", description: "Description for Task 3" },
    ],
    done: [
      { id: "task-4", title: "Task 4", description: "Description for Task 4" },
    ],
  };

  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // If dropped outside of a droppable area
    if (!destination) {
      return;
    }

    // If dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Reorder tasks within the same column
    if (source.droppableId === destination.droppableId) {
      const column = tasks[source.droppableId];
      const reorderedTasks = Array.from(column);
      const [removedTask] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, removedTask);

      setTasks({
        ...tasks,
        [source.droppableId]: reorderedTasks,
      });
      return;
    }

    // Move task to a different column
    const start = tasks[source.droppableId];
    const finish = tasks[destination.droppableId];
    const [movedTask] = start.splice(source.index, 1);
    finish.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: start,
      [destination.droppableId]: finish,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {Object.keys(tasks).map((columnId) => (
          <div key={columnId} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              {columnId.toUpperCase()}
            </h3>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks[columnId].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white rounded-lg shadow-md p-3 mb-2"
                        >
                          <p className="text-sm font-medium">{task.title}</p>
                          <p className="text-xs text-gray-600">
                            {task.description}
                          </p>
                          <TaskModal task={task} />{" "}
                          {/* Render task details modal */}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
